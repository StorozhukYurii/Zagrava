import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import screens from '../../../../constants/screens';
import {colors, dimension, fontSizes} from '../../../../styles';

const PurchaseItem = ({item}) => {

  const navigation = useNavigation()

  const onOpenPurchase = () => {
    navigation.navigate(screens.Purchase)
  }

  const statusTextColor = status => {
    if (status === 'active') {
      return 'red';
    } else if (status === 'paid') {
      return 'green';
    } else if (status === 'received') {
      return 'blue';
    }
  };

  const statusIcon = status => {
    if (status === 'active') {
      return 'ios-create';
    } else if (status === 'paid') {
      return 'card';
    } else if (status === 'received') {
      return 'ios-rocket-sharp';
    }
  };

  const notification = (status) => {
    if (status === 'active') {
        return 'Please complete your order';
      } else if (status === 'paid') {
        return 'Your order is in progress';
      } else if (status === 'received') {
        return 'Order received, may it bring you pleasure!';
      }
  }

  const backgroundColorStatus = (status) => {
    if(status === 'received'){
        return colors.secondaryDark
    } else return colors.secondary
  }
  return (
    <TouchableOpacity onPress={onOpenPurchase} style={[styles.container, {backgroundColor:backgroundColorStatus(item.status)}]}>
      <View style={{padding: dimension.small}}>
        <Text style={styles.textOrderNumber}>№{item.id}</Text>
        <Text style={styles.textDate}>{item.date}</Text>
        <View style={{flexDirection:'row', alignContent:'center',}}>
          <Text style={styles.textStatus}>
            The status of your order:{' '}
            <Text style={{color: statusTextColor(item.status)}}>
              {item.status}{' '}
            </Text>
          </Text>
          <Ionicons name={statusIcon(item.status)} size={22}/>
        </View>
        <Text style={styles.text}>You have ordered {item.quantity} items</Text>
        <Text style={styles.text}>Price: {item.price}$</Text>
        <Text style={styles.text}>Discount: -{item.discount}%</Text>
        <Text style={styles.textTotalPrice}>Total price: {item.totalPrice}$</Text>
        <Text style={styles.text}>You receive {item.points} points to your rank!</Text>
        <Text style={styles.textNotification}>{notification(item.status)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: dimension.height * 0.3,
    marginHorizontal: dimension.small,
    marginVertical: dimension.xsmall,
    borderRadius: dimension.borderRadius,
  },
  textOrderNumber: {
    fontWeight: '800',
    fontSize: fontSizes.large,
    color:colors.dark,
  },
  textDate: {
    fontSize: fontSizes.xsmall,
    marginTop: -dimension.xsmall,
    marginBottom: dimension.medium,
  },
  textStatus: {
    fontSize: fontSizes.large,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom:dimension.xsmall
  },
  textTotalPrice:{
    marginTop:dimension.small,
    fontSize:fontSizes.large,
    fontWeight:'800',
  },    
  text:{
    fontWeight:'500'
  },
  textNotification:{
    marginTop:dimension.small,
    color:colors.main,
    fontSize:fontSizes.medium,
    fontWeight:'800'
  }

});

export default PurchaseItem;
