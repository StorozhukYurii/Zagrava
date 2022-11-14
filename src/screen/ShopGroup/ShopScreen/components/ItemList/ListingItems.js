import React, {memo} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, dimension} from '../../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../../../../components/Separator';
import { onAddAmountItem, onToggleLike } from '../../../../../store/listingsSlice/listingsSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../../../constants/screens';

const ListingItems = memo(({item, isFavorite, data}) => {

  const dispatch = useDispatch()
  const {id} = item

  const navigation = useNavigation()

  const onOpenProduct = () => {
    navigation.navigate(screens.Product, {item, id:item.id})
  }

  const  onAddItemToBasket = () => {
    dispatch(onAddAmountItem(item))
  }
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.9} style={{width:dimension.width/2.15}} onPress={onOpenProduct}>
        <ImageBackground
          source={{uri: item.img[0]}}
          style={styles.image}
          imageStyle={{borderRadius: 10}}>
          <View style={styles.itemRating}>
            <Text style={{fontSize: 10, color: colors.white}}>{item.rating}</Text>
            <Ionicons name={'star'} size={10} color={colors.gold} />
          </View>
          <View style={styles.itemRatingContainer}></View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.description}>
        <View>
          <Text style={{fontSize: 14, fontWeight: '500'}}>{`${item.name.substr(
            0,
            50,
          )}${item.name.length > 50 ? '...' : ''}`}</Text>
          <Text style={{fontSize: 12, color: colors.darkGrey}}>
            Material: {item.material} wood
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{flexDirection:'row', justifyContent:'space-between', width:dimension.width/5}}>
            <TouchableOpacity onPress={() =>  dispatch(onToggleLike({id}))}>
              <Ionicons
                name={item.like ? 'heart' :'heart-outline'}
                size={22}
                color={item.like ? colors.main : colors.darkGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'chatbox-outline'}
                size={22}
                color={colors.darkGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'arrow-redo-outline'}
                size={22}
                color={colors.darkGrey}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => onAddItemToBasket()} style={styles.priceContainer}>
            <Text style={{color: colors.main}}>{item.price}$</Text>
          </TouchableOpacity>
        </View>
         {isFavorite && data.length <=2 ? null : (
           <Separator small />
         )}
        
      </View>
     
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    height: dimension.width / 2,
    borderRadius: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  description: {
    paddingHorizontal: 2,
    justifyContent: 'space-between',
    width:dimension.width/2.15,
    flex: 1,
  },
  itemRating: {
    flexDirection: 'row',
    width: dimension.width / 12,
    justifyContent: 'space-around',
    position:'absolute',
    right:8,
    top:10,
    alignItems:'center'
  },
  itemRatingContainer:{
    backgroundColor: colors.secondary,
    height: 25,
    borderRadius: dimension.borderRadius,
    top:dimension.xsmall,
    right:dimension.xsmall,
    width: dimension.width / 10,
    opacity: 0.3,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    backgroundColor: colors.secondary,
    padding: 5,
    marginVertical: 5,
    width: dimension.width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimension.borderRadius,
  },
});
export default ListingItems;
