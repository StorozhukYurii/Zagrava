import React, {memo} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, dimension} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SingleItem = memo(({item}) => {
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
        <Text>{`${item.shortDescr.substr(
            0,
            55,
          )}${item.shortDescr.length > 55 ? '...' : ''}`}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.9}>
        <ImageBackground source={{uri: item.img}} style={styles.image}>
          <View style={styles.itemRating}>
          <Text style={{fontSize: 18, color:colors.white}}>{item.rating}</Text>
          <Ionicons name={'star'} size={18} color={colors.gold} />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomSizeMaterial}>
          <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={{fontSize: 12}}>Size: {item.size} inch. </Text>
            <Text style={{fontSize: 12}}>Material: {item.material} wood</Text>
          </View>
          <Text style={{fontSize: 12}}>22 coments</Text>
        </View>
        <View style={styles.bottomIconPriceContainer}>
          <View style={styles.bottomIconContainer}>
            <TouchableOpacity>
              <Ionicons
                name={'heart-outline'}
                size={30}
                color={colors.darkGrey}
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
          <TouchableOpacity style={styles.priceContainer}>
            <Text>{item.price} $</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection:'row',
    justifyContent:'flex-end',
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemRating:{
    flexDirection:'row',
    padding:5,
    alignItems:'center',
    backgroundColor:colors.secondary,
    height:40,
    borderRadius:10,
    margin:10,
    width:dimension.width/6.5,
    justifyContent:'space-around',
    opacity:0.5
  }
});

export default SingleItem;
