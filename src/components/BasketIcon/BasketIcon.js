import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {colors, dimension} from '../../styles';
import screens from '../../constants/screens';

const BasketIcon = () => {
  const navigation = useNavigation();
  const listings = useSelector(state => state.listings.listings);

  let itemInBasketSum = listings.reduce((sum, item) => sum + item.amount, 0);

  const onOpenOrderList = () => {
    navigation.navigate(screens.OrderList);
  };

  return (
    <>
      {itemInBasketSum >= 1 && (
        <TouchableOpacity style={styles.basketIcon} onPress={onOpenOrderList}>
          <View>
            <IconFontAwesome5 name={'shopping-basket'} size={24} />
            <View style={styles.basketCounterContainer}>
              <Text style={styles.basketCounter}>{itemInBasketSum}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  basketIcon: {
    position: 'absolute',
    // alignSelf: 'center',
    backgroundColor: colors.main,
    padding: 2,
    marginRight: 15,
    bottom: 8,
    padding: 12,
    right: 0,
    borderRadius: dimension.borderRadiusUserImage,
    borderWidth:1,
    borderColor:colors.secondaryDark
  },
  basketCounterContainer: {
    height: 18,
    width: 18,
    backgroundColor: colors.secondary,
    position: 'absolute',
    bottom: -8,
    right: -5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketCounter: {
    color: colors.main,
    fontSize: 10,
    fontWeight: '500',
  },
});

export default BasketIcon;
