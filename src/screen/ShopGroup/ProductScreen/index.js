import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import HeaderLogo from '../../../components/HeaderLogo';
import {dimension, colors, fontSizes} from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../../components/Separator';
import {useDispatch, useSelector} from 'react-redux';
import {onToggleLike} from '../../../store/listingsSlice/listingsSlice';
import {useEffect} from 'react';
import { styles } from './style';

const ProductScreen = ({route}) => {
  const navigation = useNavigation();
  const {item, id} = route.params;
  const {img} = item;

  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.name);

  const [like, setLike] = useState(item.like);
  const [countLike, setCountLike] = useState(0);

  const toggleLike = () => {
    dispatch(onToggleLike({id}));
    setLike(!like);
    const amount = like ? -1 : 1;
    setCountLike(Number(countLike) + amount);
  };

  useEffect(() => {
    setCountLike(item.likesCount);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderLogo reverse />,
      title: '',
    });
  });

  const [imageActive, setImage] = useState(0);

  const onchange = e => {
    if (e) {
      const slide = Math.ceil(
        e.contentOffset.x / e.layoutMeasurement.width,
      );
      if (slide != imageActive) {
        setImage(slide);
      }
    }
  };
  return (
    <ScrollView>
      <View>
        <View style={{position: 'absolute', zIndex: 1, right: 0}}>
          <View style={styles.itemRating}>
            <Text style={{fontSize: 18, color: colors.white}}>
              {item.rating}
            </Text>
            <Ionicons name={'star'} size={18} color={colors.gold} />
          </View>
          <View style={styles.itemRatingContainer}></View>
        </View>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {img.map((e, index) => (
            <ImageBackground
              source={{uri: e}}
              style={styles.image}
              key={e}></ImageBackground>
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {img.length > 1 &&
            img.map((e, index) => (
              <Text
                key={e}
                style={imageActive == index ? styles.dotActive : styles.dot}>
                •
              </Text>
            ))}
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.bottomIconPriceContainer}>
          <View style={styles.bottomIconContainer}>
            <TouchableOpacity onPress={toggleLike}>
              <Ionicons
                name={like ? 'heart' : 'heart-outline'}
                size={30}
                color={like ? colors.main : colors.darkGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'chatbox-outline'}
                size={30}
                color={colors.darkGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'arrow-redo-outline'}
                size={30}
                color={colors.darkGrey}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.priceContainer}>
            <Ionicons
              name={'add-circle-outline'}
              size={24}
              color={colors.main}
            />
            <Text style={styles.priceText}>{item.price} $</Text>
          </TouchableOpacity>
        </View>
        <Text>{countLike} likes</Text>
        <Text style={styles.title}>{item.name}</Text>

        <Text>{item.shortDescr}</Text>
        <View style={{padding: 10}}>
          <Text>Material: {item.material} wood</Text>
          <Text>Size :{item.size} inch</Text>
          <Text>Type of product: {item.type}</Text>
        </View>
        <Text>View all reviews (125)</Text>

        <View style={styles.reviewContainer}>
          <View style={styles.userImage}>
            <Text style={styles.userImageLetter}>{userName.substr(0, 1)}</Text>
          </View>
          <TextInput
            style={styles.reviewInput}
            placeholder="Write your review..."
          />
        </View>

        <Separator big />

        <Text style={{marginVertical: dimension.small}}>
          {'  ' + item.history}
        </Text>
      </View>
    </ScrollView>
  );
};



export default ProductScreen;
