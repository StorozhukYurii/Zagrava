import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import SearchInput from '../../components/SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DATA_ITEM } from '../../data/data';
import { DATA_LIST_TAB } from '../../data/listTab';
import FilterListTab from './components/FilterListTab/FilterListTab';
import Separator from '../../components/Separator';
import ItemList from './components/ItemList/ItemList';


export const ShopScreen = () => {
    const [status, setStatus] = useState('All');
    const setStatusFilter = status => {
      setStatus(status);
    };

    const [text, onChangeText] = useState('')

    const [dataList, setDataList] = useState(DATA_ITEM)

    const [counter, setCounter] = useState(0)

    const addToBasket = () => {
        setCounter(counter + 1)
    }

return(
    <Container>
        <SearchInput onChangeText={onChangeText} text={text} counter={counter}/>
        <FilterListTab DATA_LIST_TAB={DATA_LIST_TAB} status={status} setStatusFilter={setStatusFilter}/>
        <Separator small/>
        <ItemList DATA_ITEM={DATA_ITEM} addToBasket={addToBasket}/>
    </Container>
)
}

const styles = StyleSheet.create({
})

export default ShopScreen;