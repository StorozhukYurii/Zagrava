import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {useState, useEffect} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderLogo from '../../../components/HeaderLogo';
import Separator from '../../../components/Separator';
import {colors, dimension, fontSizes} from '../../../styles';
import OrderComponent from '../components/OrderComponent';
import {onAddToCart} from '../../../store/cartSlice/cartSlice';
import {onClearBasket} from '../../../store/listingsSlice/listingsSlice';

const OrderListScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderLogo reverse />,
      title: '',
    });
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const listings = useSelector(state => state.listings.listings);

  let itemInBasketPriceSum = listings.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  const car = [];
  listings.map(item => {
    if (item.amount >= 1) {
      car.push(item);
    }
  });

  const addToCart = () => {
    if(car.length >= 1){
      dispatch(onAddToCart(car))
    }
  };

  const removeOrderList = () => {
    dispatch(onClearBasket());
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={{paddingHorizontal: dimension.small, flex: 1}}>
      <Text style={styles.textHeadline}>Confirm and pay</Text>
      <Separator small />
      <FlatList
        data={car}
        keyExtractor={(item, index) => index}
        key={(item, index) => index}
        renderItem={({item}) => <OrderComponent item={item} />}
      />
      <View style={styles.totalPriceContainer}>
        <Text style={styles.textHeadline}>Total:</Text>
        <Text style={[styles.textHeadline, {color: colors.main}]}>
          {itemInBasketPriceSum} $
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.secondaryDark}]}
          onPress={removeOrderList}>
          <Text style={styles.buttonText}>Clear basket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={addToCart}>
          <Text style={styles.buttonText}>Confirm and pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeadline: {
    padding: dimension.small,
    fontSize: fontSizes.headline,
    fontWeight: '700',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: dimension.medium,
    marginBottom: dimension.small,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: dimension.borderRadius / 2,
  },
  buttonText: {
    fontSize: fontSizes.medium,
  },
});

export default OrderListScreen;
