import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import HeaderLogo from '../../../components/HeaderLogo';
import Separator from '../../../components/Separator';
import { dimension, fontSizes } from '../../../styles';
import OrderComponent from '../components/OrderComponent';

const OrderListScreen = () => {
  const navigation = useNavigation()
  const cart = useSelector(state => state.cart.cart)

 useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => <HeaderLogo reverse/>,
    title: '',
  })
 })

  return (
    <View style={{paddingHorizontal:dimension.small}}>
      <Text style={styles.textTitle}>Confirm and pay</Text>
      <Separator small/>
      <FlatList
      data={cart}
      keyExtractor={(item, index) => index}
      key={(item, index) => index}
      renderItem={({item}) => 
        <OrderComponent item={item}/>
      }
      style={{marginBottom:dimension.xbig}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle:{
    padding:dimension.small,
    fontSize:fontSizes.headline,
    
  }
})

export default OrderListScreen;
