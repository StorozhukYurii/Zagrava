import React, {useState} from 'react';
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


const ItemList = ({DATA_ITEM}) => {
  const [isSingleItem, setSingleItem] = useState(false);

  const onToggle = () => {
    setSingleItem(!isSingleItem);
  };
  const lengthOfListing = Object.keys(DATA_ITEM).length;
  const columnWrapperStyle = {padding:5}

  const ListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>
          {lengthOfListing} listings found
        </Text>
        <Pressable onPress={() => onToggle()}>
          {/* {isSingleItem ? <Ionicons size={20} name={"layers-outline"}/> : <Ionicons size={20} name={"map-outline"}/>} */}
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
          data={DATA_ITEM}
          // keyExtractor={item => item.id}
          renderItem={({item}) =>
            isSingleItem ? <SingleItem item={item} /> : <ListingItems item={item} />
          }
          ListHeaderComponent={ListHeader}
          numColumns={!!isSingleItem ? 1 : 2}
          key={isSingleItem ? 1 : 2}
          ItemSeparatorComponent={() => isSingleItem ? <Separator big/> : null}
          columnWrapperStyle = {!isSingleItem ? columnWrapperStyle : null}
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
