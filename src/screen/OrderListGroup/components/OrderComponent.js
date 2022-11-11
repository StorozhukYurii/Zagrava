import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, dimension, fontSizes} from '../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { onAddAmountItem, onDecAmountItem } from '../../../store/listingsSlice/listingsSlice';

const OrderComponent = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [counter, setCounter] = useState(1);

 

//  useEffect(() => {
//   qqq(item.id)
//  },[])
  

  return (
    <View style={styles.container}>
      <Image source={{uri: item.img[0]}} style={styles.image} />

      <View style={styles.nameContainer}>
        <Text style={styles.text}>{`${item.name.substr(0, 40)}${
          item.name.length > 40 ? '...' : ''
        }`}</Text>
        <View style={styles.quantityConteiner}>
          <TouchableOpacity onPress={() => dispatch(onDecAmountItem(item))}>
            <AntDesign name={'minuscircleo'} size={18} />
          </TouchableOpacity>
          <Text style={styles.text}>{item.amount}</Text>
          <TouchableOpacity onPress={() => dispatch(onAddAmountItem(item))}>
            <AntDesign name={'pluscircleo'} size={18} />
          </TouchableOpacity>
          
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.text}>{item.price} $</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: dimension.small,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: dimension.borderRadius,
    justifyContent: 'space-around',
    height: dimension.height * 0.15,
    alignItems: 'center',
  },
  image: {
    width: dimension.width * 0.2,
    height: dimension.height * 0.125,
    borderRadius: dimension.borderRadius,
  },
  nameContainer: {
    width: dimension.width * 0.45,
  },
  priceContainer: {
    width: dimension.width * 0.18,
  },
  quantityConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: dimension.small,
    // backgroundColor:'yellow',
    width: dimension.width * 0.2,
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
});

export default OrderComponent;
