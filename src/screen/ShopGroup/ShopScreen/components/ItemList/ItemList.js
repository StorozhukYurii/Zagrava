import React, {useEffect, useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../../../../components/Separator';
import {colors} from '../../../../../styles';
import ListingItems from './ListingItems';
import SingleItem from './SingleItem';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import screens from '../../../../../constants/screens';
import BasketIcon from '../../../../../components/BasketIcon/BasketIcon';
import {createSelector} from 'reselect'
import { onFilterFromLowerPrice } from '../../../../../store/listingsSlice/listingsSlice';

const ItemList = ({}) => {
  const dispatch = useDispatch();

  const [isSingleItem, setSingleItem] = useState(true);

  const listings = useSelector(state => state.listings.listings);
  const initialFilter = useSelector(state => state.filter.initialFilter);
  const activeFilter = useSelector(state => state.filter.activeFilter)

  const onToggleList = () => {
    setSingleItem(!isSingleItem);
  };

  const lengthOfListing = Object.keys(listings).length;
  const columnWrapperStyle = {padding: 5};

  // const navigation = useNavigation()

  // const onOpenProduct = (item) => {
  //   navigation.navigate(screens.Product, {item})
  // }
  //   const filteredHeroesSelector = createSelector(
  //     (state) => state.filters.activeFilter,
  //     (state) => state.heroes.heroes,
  //     (filter, heroes) => {
  //         if (filter === 'all') {
  //             console.log('render');
  //             return heroes;
  //         } else {
  //             return heroes.filter(item => item.element === filter);
  //         }
  //     }
  // );
  const filteredItemSelector = createSelector(
    state => state.listings.listings,
    state => state.filter.initialFilter,
    (list, filters) => {
      if(filters.includes('All')){
        return list
      } else if(filters.includes('Favorite')){
        return list.filter(item => item.like === true)
      }else 
      if(filters.includes('From a higher price')){
        return  list.slice().sort((a,b) => a.price > b.price ? -1 : 1)
      } else if(filters.includes('From a lower price')){
        return  list.slice().sort((a,b) => a.price > b.price ? 1 : -1)
      } else
       if(filters.includes('Celtic god')){
        return list.filter(item => item.type === 'Celtic god')
       } else
       if(filters.includes('Wicca')){
        return list.filter(item => item.type === 'Wicca')
       } else
       if(filters.includes('Scandinavian god')){
        return list.filter(item => item.type === 'Scandinavian god')
       } else
       if(filters.includes('Sumerian')){
        return list.filter(item => item.type === 'Sumerian')
       } else
       if(filters.includes('Candel holders')){
        return list.filter(item => item.type === 'Candel holders')
       } else
       if(filters.includes('Ancient Greece')){
        return list.filter(item => item.type === 'Ancient Greece')
       } else
       if(filters.includes('Oak')){
        return list.filter(item => item.material === 'Oak')
       } else
       if(filters.includes('Pine')){
        return list.filter(item => item.material === 'Pine')
       } else 
       if(filters.includes('From a higher rating')){
        return  list.slice().sort((a,b) => a.rating > b.rating ? -1 : 1)
    } else 
    if(filters.includes('From a lower rating')){
     return  list.slice().sort((a,b) => a.rating > b.rating ? 1 : -1)
 }
  }
  )

  const filteredListing = useSelector(filteredItemSelector)
  console.log(filteredListing.length, 'fffffff')

  const ListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>
          {filteredListing.length} listings found
        </Text>
        <Pressable onPress={() => onToggleList()}>
          <Ionicons
            size={25}
            name={isSingleItem ? 'layers-outline' : 'map-outline'}
            color={colors.dark}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={filteredListing}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            isSingleItem ? (
              <SingleItem item={item} />
            ) : (
              <ListingItems item={item} />
            )
          }
          ListHeaderComponent={ListHeader}
          numColumns={!!isSingleItem ? 1 : 2}
          key={isSingleItem ? 1 : 2}
          ItemSeparatorComponent={() =>
            isSingleItem ? <Separator big /> : null
          }
          columnWrapperStyle={!isSingleItem ? columnWrapperStyle : null}
        />
      </View>
      <BasketIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:10
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.darkGrey,
  },
});

export default ItemList;
