import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../../components/Container';
import SearchInput from '../../../components/SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DATA_ITEM} from '../../../data/data';
import {DATA_LIST_TAB} from '../../../data/listTab';
import FilterList from './components/Filter/FilterList';
import Separator from '../../../components/Separator';
import ItemList from './components/ItemList/ItemList';

export const ShopScreen = () => {
  const [text, onChangeText] = useState('');

  return (
    <Container>
      <SearchInput onChangeText={onChangeText} text={text} />
      <FilterList />
      <Separator small />
      <ItemList />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ShopScreen;
