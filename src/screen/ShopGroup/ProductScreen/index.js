import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Pressable
} from 'react-native';
import HeaderLogo from '../../../components/HeaderLogo';
import { dimension, colors, fontSizes } from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Separator from '../../../components/Separator';
import { useDispatch, useSelector } from 'react-redux';
import { onToggleLike, onAddAmountItem, onDecAmountItem } from '../../../store/listingsSlice/listingsSlice';
import { useEffect } from 'react';
import { styles } from './style';
import Container from '../../../components/Container';

const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item, id } = route.params;
  const { img } = item;

  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.name);

  const [like, setLike] = useState(null);
  const [countLike, setCountLike] = useState(0);
  const [countAmount, setCountAmount] = useState(0)

  const toggleLike = () => {
    dispatch(onToggleLike({ id }));
    setLike(!like);
    const amount = like ? -1 : 1;
    setCountLike(Number(countLike) + amount);
  };

  useEffect(() => {
    setCountLike(item.likesCount);
    setLike(item.like)
    setCountAmount(item.amount)
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

  const onAddItemToBasket = () => {
    dispatch(onAddAmountItem(item));
    setCountAmount(countAmount + 1)
  };

  const onRemoveItemFromBasket = () => {
    dispatch(onDecAmountItem(item));
    setCountAmount(countAmount - 1)
  };
  return (
    <Container>
      <HeaderLogo reverse goBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ position: 'absolute', zIndex: 1, right: 0 }}>
            <View style={styles.itemRating}>
              <Text style={{ fontSize: 18, color: colors.white }}>
                {item.rating}
              </Text>
              <Ionicons name={'star'} size={18} color={colors.gold} />
            </View>
            <View style={styles.itemRatingContainer}></View>
          </View>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={0}
            horizontal>
            {img.map((e, index) => (
              <ImageBackground
                source={{ uri: e }}
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
            <View style={styles.priceContainer}>
              {countAmount >= 1 && (
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign
                    name={'minuscircleo'}
                    size={24}
                    color={colors.main}
                    onPress={() => onRemoveItemFromBasket()}
                  />
                  <Text style={styles.priceText}>{countAmount}</Text>
                </View>
              )}

              <Pressable
                style={{ flexDirection: 'row' }}
                onPress={() => onAddItemToBasket()}>
                <AntDesign name={'pluscircleo'} size={24} color={colors.main} />
                <Text style={styles.priceText}>{item.price} $</Text>
              </Pressable>
            </View>
          </View>
          <Text>{countLike} likes</Text>
          <Text style={styles.title}>{item.name}</Text>

          <Text>{item.shortDescr}</Text>
          <View style={{ padding: 10 }}>
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

          <Text style={{ marginVertical: dimension.small }}>
            {'  ' + item.history}
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};



export default ProductScreen;
