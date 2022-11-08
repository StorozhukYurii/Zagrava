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
} from 'react-native';
import HeaderLogo from '../../../components/HeaderLogo';
import {dimension, colors, fontSizes} from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../../components/Separator';
import {useDispatch, useSelector} from 'react-redux';
import {onToggleLike} from '../../../store/listingsSlice/listingsSlice';

const ProductScreen = ({route}) => {
  const navigation = useNavigation();
  const {item, id} = route.params;
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.name);

  const [like, setLike] = useState(item.like);

  const toggleLike = () => {
    dispatch(onToggleLike({id}));
    setLike(!like);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderLogo reverse />,
      title: '',
    });
  });

  return (
    <ScrollView>
      <ImageBackground source={{uri: item.img}} style={styles.image}>
        <View style={styles.itemRating}>
          <Text style={{fontSize: 18, color: colors.white}}>{item.rating}</Text>
          <Ionicons name={'star'} size={18} color={colors.gold} />
        </View>
        <View style={styles.itemRatingContainer}></View>
      </ImageBackground>
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
        <Text>{item.likesCount} likes</Text>
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
          <TextInput style={styles.reviewInput} placeholder="Write your review..." />
        </View>

        <Separator big />

        <Text style={{marginVertical:dimension.small}}>{'  ' + item.history}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.headline,
    paddingVertical: dimension.small,
    fontWeight: '700',
    color: colors.main,
    letterSpacing: 0.5,
  },
  infoContainer: {
    paddingHorizontal: 10,
  },
  image: {
    width: dimension.width,
    height: dimension.width,
    marginBottom: dimension.xsmall,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomIconPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: dimension.xsmall,
  },
  bottomIconContainer: {
    flexDirection: 'row',
    width: dimension.width / 3.5,
    justifyContent: 'space-between',
  },
  priceContainer: {
    backgroundColor: colors.secondary,
    padding: 5,
    width: dimension.width / 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: dimension.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceText: {
    color: colors.main,
    fontWeight: '500',
    fontSize: fontSizes.large,
  },
  itemRating: {
    flexDirection: 'row',
    padding: dimension.xsmall,
    width: dimension.width / 6.5,
    justifyContent: 'space-evenly',
    position: 'absolute',
    right: 10,
    top: 12,
    alignItems: 'center',
  },
  itemRatingContainer: {
    backgroundColor: colors.secondary,
    height: 40,
    borderRadius: dimension.borderRadius,
    margin: dimension.width / 40,
    width: dimension.width / 6.5,
    opacity: 0.3,
  },
  userImage: {
    height: 36,
    width: 36,
    backgroundColor: colors.secondary,
    borderRadius: dimension.borderRadiusUserImage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImageLetter: {
    fontWeight: '700',
    color: colors.main,
    fontSize: fontSizes.large,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  reviewInput:{
    // borderWidth:1,
    height:40,
    flex:1,
    marginLeft:dimension.small
  }
});

export default ProductScreen;
