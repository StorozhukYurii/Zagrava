import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Container from '../../components/Container';
import HeaderLogo from '../../components/HeaderLogo';
import { useDispatch, useSelector } from 'react-redux';
import { colors, fontSizes } from '../../styles';
import PurchaseItem from './components/PurchaseItem';

export const PurchaseHistoryScreen = () => {

  const purchase = useSelector(state => state.purchase.purchases)

  return(
  <Container>

    <HeaderLogo />
    
    <Text style={{padding:10, fontWeight:'800', fontSize:fontSizes.large, color:colors.dark}}>Your orders:</Text>
    
    <FlatList
    data={purchase}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <PurchaseItem item={item}/>
    )
    }
    />
  </Container>
)};

export default PurchaseHistoryScreen;
