import React, { useEffect, useState } from 'react';
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
import { colors } from '../../../../../styles';
import ListingItems from './ListingItems';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../../../constants/screens';
import BasketIcon from '../../../../../components/BasketIcon/BasketIcon';
import { createSelector } from 'reselect';

const ItemList = ({ }) => {
  const dispatch = useDispatch();

  const [isSingleItem, setSingleItem] = useState(true);

  const onToggleList = () => {
    setSingleItem(!isSingleItem);
  };

  const columnWrapperStyle = { padding: 5 };

  const filteredItemSelector = createSelector(
    state => state.listings.listings,
    state => state.filter.initialFilter,
    (list, filters) => {
      return list.filter(item => filters.includes('Favorite') ? item.like === true : list).slice().sort((a, b) => (filters.includes('From a higher price') ? (a.price > b.price ? -1 : 1) : filters.includes('From a lower price') ? (a.price > b.price ? 1 : -1) : filters.includes('From a higher rating') ? (a.rating > b.rating ? -1 : 1) : filters.includes('From a lower rating') ? (a.rating > b.rating ? 1 : -1) : list)).filter(item => filters.includes('Celtic god') ? item.type === 'Celtic god' : filters.includes('Wicca') ? item.type === 'Wicca' : filters.includes('Scandinavian god') ? item.type === 'Scandinavian god' : filters.includes('Sumerian') ? item.type === 'Sumerian' : filters.includes('Candel holders') ? item.type === 'Candel holders' : filters.includes('Ancient Greece') ? item.type === 'Ancient Greece' : list).filter(item => filters.includes('Oak') ? item.material === 'Oak' : filters.includes('Pine') ? item.material === 'Pine' : list)
    },
  );

  const filteredListing = useSelector(filteredItemSelector);

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
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredListing}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
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