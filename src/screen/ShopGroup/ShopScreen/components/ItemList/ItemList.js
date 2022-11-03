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
import Separator from '../../../../components/Separator';
import {colors} from '../../../../styles';
import ListingItems from './ListingItems';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';

const ItemList = ({ addToBasket}) => {

  const dispatch = useDispatch()

  const [isSingleItem, setSingleItem] = useState(true);

  
  const listings = useSelector(state => state.listings.listings)

  const onToggleList = () => {
    setSingleItem(!isSingleItem);
  };

  const lengthOfListing = Object.keys(listings).length;
  const columnWrapperStyle = {padding: 5};


  const ListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>
          {lengthOfListing} listings found 
        </Text>
        <Pressable onPress={() => onToggleList()}>
          <Ionicons
            size={25}
            name={isSingleItem ? 'layers-outline' : 'map-outline'}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={listings}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            isSingleItem ? (
              <SingleItem
                item={item}
                addToBasket={addToBasket}
              />
            ) : (
              <ListingItems
                item={item}
                addToBasket={addToBasket}
              />
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
