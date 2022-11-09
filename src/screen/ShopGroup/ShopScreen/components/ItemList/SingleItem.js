import React, {memo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, dimension, fontSizes} from '../../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {onToggleLike} from '../../../../../store/listingsSlice/listingsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import screens from '../../../../../constants/screens';
import { onAddToCart } from '../../../../../store/cartSlice/cartSlice';

const SingleItem = memo(({item}) => {
  const dispatch = useDispatch();
  const {id} = item;

  // const cart = useSelector(state => state.cart.cart)
  const navigation = useNavigation();

  const onOpenProduct = () => {
    navigation.navigate(screens.Product, {item, id: item.id});
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <View style={styles.topTitleContainer}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>{`${item.name.substr(
            0,
            31,
          )}${item.name.length > 31 ? '...' : ''}`}</Text>
          <TouchableOpacity>
            <Ionicons
              name={'ellipsis-horizontal'}
              size={30}
              color={colors.darkGrey}
            />
          </TouchableOpacity>
        </View>
        <Text>{`${item.shortDescr.substr(0, 55)}${
          item.shortDescr.length > 55 ? '...' : ''
        }`}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={onOpenProduct}>
        <ImageBackground source={{uri: item.img[0]}} style={styles.image}>
          <View style={styles.itemRating}>
            <Text style={{fontSize: 18, color: colors.white}}>
              {item.rating}
            </Text>
            <Ionicons name={'star'} size={18} color={colors.gold} />
          </View>
          <View style={styles.itemRatingContainer}></View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomSizeMaterial}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12}}>Size: {item.size} inch. </Text>
            <Text style={{fontSize: 12}}>Material: {item.material} wood</Text>
          </View>
          <Text style={{fontSize: 12}}>22 coments</Text>
        </View>
        <View style={styles.bottomIconPriceContainer}>
          <View style={styles.bottomIconContainer}>
            <TouchableOpacity onPress={() => dispatch(onToggleLike({id}))}>
              <Ionicons
                name={item.like ? 'heart' : 'heart-outline'}
                size={30}
                color={item.like ? colors.main : colors.darkGrey}
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
          <TouchableOpacity onPress={() => dispatch(onAddToCart(item))} style={styles.priceContainer}>
            <Ionicons
              name={'add-circle-outline'}
              size={24}
              color={colors.main}
            />
            <Text style={styles.priceText}>{item.price} $</Text>
          </TouchableOpacity>
        </View>
        <Text>{item.likesCount} likes</Text>
      </View>
      {/* <Separator big /> */}
    </View>
  );
});

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 10,
  },
  topTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: dimension.width,
    height: dimension.width,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bottomSizeMaterial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomIconPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
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
    justifyContent:'space-evenly',
    // alignItems: 'center',
    borderRadius: dimension.borderRadius,
    flexDirection:'row',
  },
  priceText:{
    color:colors.main,
    fontWeight:'500',
    fontSize:fontSizes.large
  },
  itemRating: {
    flexDirection: 'row',
    padding: dimension.xsmall,
    width: dimension.width / 6.5,
    justifyContent: 'space-around',
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
});

export default SingleItem;
