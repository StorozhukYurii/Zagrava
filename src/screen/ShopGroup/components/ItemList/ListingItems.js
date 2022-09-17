import React, {memo} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, dimension} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../../../components/Separator';

const ListingItems = memo(({item}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.9} style={{width:dimension.width/2.15}}>
        <ImageBackground
          source={{uri: item.img}}
          style={styles.image}
          imageStyle={{borderRadius: 10}}>
          <View style={styles.itemRating}>
            <Text style={{fontSize: 10, color: colors.white}}>{item.rating}</Text>
            <Ionicons name={'star'} size={10} color={colors.gold} />
          </View>
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
            <TouchableOpacity>
              <Ionicons
                name={'heart-outline'}
                size={22}
                color={colors.darkGrey}
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

          <TouchableOpacity style={styles.priceContainer}>
            <Text style={{color: colors.white}}>{item.price}$</Text>
          </TouchableOpacity>
        </View>
         <Separator small />
      </View>
     
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
    // width: dimension.width / 2,
    // flexWrap:'wrap'
    // backgroundColor: 'yellow',
  },
  image: {
    // width: '100%',
    height: dimension.width / 2,
    borderRadius: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  description: {
    paddingHorizontal: 2,
    justifyContent: 'space-between',
    // backgroundColor:'green',
    width:dimension.width/2.15,
    flex: 1,
  },
  itemRating: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: colors.secondary,
    height: 25,
    borderRadius: 10,
    margin: 10,
    width: dimension.width / 10,
    justifyContent: 'space-around',
    opacity: 0.7,
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
    borderRadius: 5,
  },
});
export default ListingItems;
