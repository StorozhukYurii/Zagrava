import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderLogo from '../../../components/HeaderLogo';
import Separator from '../../../components/Separator';
import {dimension, fontSizes} from '../../../styles';
import OrderComponent from '../components/OrderComponent';
import {onAddToCart} from '../../../store/cartSlice/cartSlice';

const OrderListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const listings = useSelector(state => state.listings.listings);

  // const newArr = arr => {
  //   let result = [];

  //   for (let str of arr) {
  //     if (!result.includes(str)) {
  //       result.push(str);
  //     }
  //   }

  //   return result;
  // };

  const car = [];
  listings.map(item => {
    if (item.amount >= 1) {
      car.push(item);
    }
  });
  // const groupById = (array) =>  {
  //   return array.reduce((obj, value) => {
  //     obj[value.id] = value;
  //     return obj;
  //   }, {})
  // }
  // console.log(groupById(cart))
  // console.log(newArr(cart), 'oooooooooooooooo')
  // console.log(cart)

  // const itemId = useSelector(state => state.cart.itemId)
  // const b = Object.entries(itemId)
  // console.log(b,'mmmmmmmmmm')

  // const arr = b.reduce(function(acc, el) {
  //   acc[el] = (acc[el] || 0) + 1;
  //   return acc;
  // }, {});

  // const b = Object.entries(arr)
  // console.log(arr)

  // const c = b.filter(item => console.log(item[0] === 1))

  //   const qqq = (id) => {
  //     for (let key in arr) {
  //       let a = ''
  //       if(arr[key] === id){
  //         return arr[key]
  //       }
  //    // alert( user[key] ); // John, 30, true
  //    console.log( arr[key], 'eeeeeeeeeeee')
  //  }
  //  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderLogo reverse />,
      title: '',
    });
  });

  return (
    <View style={{paddingHorizontal: dimension.small}}>
      <Text style={styles.textTitle}>Confirm and pay</Text>
      <Separator small />
      <FlatList
        data={car}
        keyExtractor={(item, index) => index}
        key={(item, index) => index}
        renderItem={({item}) => <OrderComponent item={item} />}
        style={{marginBottom: dimension.xbig}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    padding: dimension.small,
    fontSize: fontSizes.headline,
  },
});

export default OrderListScreen;
