import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container'
import ListingItems from '../../ShopGroup/ShopScreen/components/ItemList/ListingItems'
import {colors, dimension, fontSizes} from '../../../styles';
import HeaderLogo from '../../../components/HeaderLogo';


const FavoriteScreen = () => {

  const listings = useSelector(state => state.listings.listings)

  const displayedItem = [];
  listings.map(item => {
    if (item.like) {
      displayedItem.push(item);
    }
  });
  let isFavorite = true

  const columnWrapperStyle = {padding: 5};

  const ListEmpty = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Image style={styles.emptyListImage} source={require('../../../assets/gallery/like.png')} />
        <Text style={styles.emptyListText}>Your favorite list is empty. Like the item you liked to display it here</Text>
      </View>
    );
  };

  return (
    <Container>
      <HeaderLogo reverse goBack/>
      <FlatList
          data={displayedItem}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
              <ListingItems
                item={item}
                isFavorite={isFavorite}
                data={displayedItem}
              />
            
          }
          numColumns={2}
          columnWrapperStyle={columnWrapperStyle}
          ListEmptyComponent={ListEmpty}
        />
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyListContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:dimension.height*0.15
  },
  emptyListImage:{
    height:300,
    width:300,
  },
  emptyListText:{
    fontSize:fontSizes.medium,
    fontWeight:'500',
    letterSpacing:0.5,
    width:dimension.width*0.75,
    textAlign:'center',
    marginBottom:dimension.xsmall
  }
})

export default FavoriteScreen;
