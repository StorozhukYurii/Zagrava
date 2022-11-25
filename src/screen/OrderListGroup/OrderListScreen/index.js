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
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderLogo from '../../../components/HeaderLogo';
import Separator from '../../../components/Separator';
import {colors, dimension, fontSizes} from '../../../styles';
import OrderComponent from '../components/OrderComponent';
import {onAddToCart} from '../../../store/cartSlice/cartSlice';
import {onClearBasket} from '../../../store/listingsSlice/listingsSlice';
import ListEmpty from '../../../components/ListEmpty';
import screens from '../../../constants/screens';

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

  const navigationToStore = () => {
    navigation.navigate(screens.ShopTab)
}
  let itemInBasketPriceSum = listings.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  const displayedItem = [];
  listings.map(item => {
    if (item.amount >= 1) {
      displayedItem.push(item);
    }
  });

  const addToCart = () => {
    if (displayedItem.length >= 1) {
      dispatch(onAddToCart(displayedItem));
    }
  };

  const removeOrderList = () => {
    dispatch(onClearBasket());
    // setTimeout(() => {
    //   navigation.goBack();
    // }, 1000);
  };

  const ListHeader = () => {
    return (
      <>
        <Text style={styles.textHeadline}>Confirm and pay</Text>
        <Separator small />
      </>
    );
  };

  const ListFooter = () => {
    return (
      <Pressable style={styles.addMoreContainer} onPress={navigationToStore}>
        <Text style={styles.addMoreText}>Add more item</Text>
      </Pressable>
    );
  };

  return (
    <View style={{paddingHorizontal: dimension.small, flex: 1}}>
      <FlatList
        data={displayedItem}
        keyExtractor={(item, index) => index}
        key={(item, index) => index}
        renderItem={({item}) => <OrderComponent item={item} />}
        ListHeaderComponent={displayedItem.length >= 1 ? ListHeader : null}
        ListFooterComponent={displayedItem.length >= 1 ? ListFooter : null}
        ListEmptyComponent={ListEmpty}
      />

      {displayedItem.length >= 1 ? (
        <>
          <Separator big />

          <View style={styles.totalPriceContainer}>
            <Text style={styles.textHeadline}>Total:</Text>
            <Text style={[styles.textHeadline, {color: colors.main}]}>
              {itemInBasketPriceSum.toFixed(2)} $
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
        </>
      ) : null}
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
    marginTop: dimension.small,
    marginBottom: dimension.small,
  },
  button: {
    backgroundColor: colors.main,
    padding: 10,
    borderRadius: dimension.borderRadius / 2,
  },
  buttonText: {
    fontSize: fontSizes.medium,
    color: colors.dark,
    fontWeight: '500',
  },
  addMoreContainer: {
    alignItems: 'flex-end',
    marginTop: dimension.xsmall,
  },
  addMoreText: {
    fontSize: fontSizes.medium,
    color: colors.main,
    textDecorationLine: 'underline',
  },
  emptyListContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:dimension.height*0.15
  },
  emptyListImage:{
    height:300,
    width:300,
  },
  emptyListText:{
    fontSize:fontSizes.medium,
    fontWeight:'500',
    letterSpacing:0.5,
    width:dimension.width*0.75,
    textAlign:'center',
    marginBottom:dimension.xsmall
  }
});

export default OrderListScreen;
