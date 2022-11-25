import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../../components/Container';
import SearchInput from '../../../components/SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DATA_ITEM} from '../../../data/data';
import {DATA_LIST_TAB} from '../../../data/listTab';
import FilterList from './components/Filter/FilterList';
import Separator from '../../../components/Separator';
import ItemList from './components/ItemList/ItemList';


import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';


export const ShopScreen = () => {
  const [text, onChangeText] = useState('');
  // const text = useRef('')

  let changeText = useCallback((t) => {
    // text.current = t
    onChangeText(t)
  },[])

  // useEffect(() => {

  // }, [text])
  console.log('render')

  
  let searchItem = (arr, txt) => {
    if (txt.length === 0) {
      return arr
    }

    return arr.filter(item => { return item.name.indexOf(txt) > -1 })
  }



  const filteredItemSelector = createSelector(
    state => state.listings.listings,
    state => state.filter.initialFilter,
    (list, filters) => {
      return list.filter(item => filters.includes('Favorite') ? item.like === true : list)
        .slice().sort((a, b) => (filters.includes('From a higher price') ? (a.price > b.price ? -1 : 1) : filters.includes('From a lower price') ? (a.price > b.price ? 1 : -1) : filters.includes('From a higher rating') ? (a.rating > b.rating ? -1 : 1) : filters.includes('From a lower rating') ? (a.rating > b.rating ? 1 : -1) : list))
        .filter(item => filters.includes('Celtic god') ? item.type === 'Celtic god' : filters.includes('Wicca') ? item.type === 'Wicca' : filters.includes('Scandinavian god') ? item.type === 'Scandinavian god' : filters.includes('Sumerian') ? item.type === 'Sumerian' : filters.includes('Candel holders') ? item.type === 'Candel holders' : filters.includes('Ancient Greece') ? item.type === 'Ancient Greece' : list)
        .filter(item => filters.includes('Oak') ? item.material === 'Oak' : filters.includes('Pine') ? item.material === 'Pine' : list)
    },
  );

  const filteredListing = useSelector(filteredItemSelector);
  let a = searchItem(filteredListing, text)

  return (
    <Container>
      <SearchInput changeText={changeText} text={text} onChangeText={onChangeText}/>
      <FilterList />
      <Separator small />
      <ItemList text={text} filteredListing={filteredListing} a={a}/>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ShopScreen;
