import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import SearchInput from '../../components/SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DATA_ITEM} from '../../data/data';
import {DATA_LIST_TAB} from '../../data/listTab';
import FilterListTab from './components/FilterListTab/FilterListTab';
import Separator from '../../components/Separator';
import ItemList from './components/ItemList/ItemList';

export const ShopScreen = () => {
  const statusFilterArray = [
    'All',
    'Price',
    'Type of product',
    'Material',
    'Rating',
  ];
  const [statusOfFilter, setStatus] = useState('All');
  const setStatusFilter = status => {
    // setModalVisible(!isModalVisible)
    changeModalVisible(true);
    setStatus(status);
    console.log('статус коли натискаєш на кнопку  фільтрів', status);
  };



  const [isModalVisible, setModalVisible] = useState(false);

  const changeModalVisible = bool => {
    setModalVisible(bool);
  };



  const [selectedNewFilterArray, setSelectedFilterArray] = useState(null);

  const AddNewFilterItem = useCallback((item, statusOfFilter) => {
    // console.log('масив фільтрів на початку перед всім ', statusFilterArray);
    // console.log('статус коли нажимаєш на один з підфільтрів ', statusOfFilter);
    // console.log('новий масив фільтрів, на початку нуль ', selectedNewFilterArray);
    // console.log('підфільтр який приходить при натисканні ', item);
    // console.log('ще якийсь статус ', statusOfFilter);
    // const arr = statusArray.push(status)
    // return arr
    const newArr = Object.assign(!!selectedNewFilterArray ? selectedNewFilterArray : statusFilterArray);
    const index = newArr.findIndex(el => el == statusOfFilter);
    const removed = newArr.splice(index, 1, item);
    // console.log('елемент який було видалено з масиву фільтрів ', removed);
    // console.log(newArr.includes(status))
    // console.log(
    //   'масив фільтрів після додання нового елемента і видалення старого ',
    //   statusFilterArray,
    // );
    setSelectedFilterArray(newArr);
    setStatus(item);
    changeModalVisible(false);
    console.log('новий статус',statusOfFilter)
    // statusArray.push(item)
    // console.log('новий масив фільтрів ', selectedNewFilterArray);
  });

  

  const [text, onChangeText] = useState('');




  const [counterBasket, setCounterBasket] = useState(0);

  const addToBasket = () => {
    setCounterBasket(counterBasket + 1);
  };



  return (
    <Container>
      <SearchInput
        onChangeText={onChangeText}
        text={text}
        counterBasket={counterBasket}
      />
      <FilterListTab
        selectedNewFilterArray={selectedNewFilterArray}
        statusOfFilter={statusOfFilter}
        setStatusFilter={setStatusFilter}
        isModalVisible={isModalVisible}
        changeModalVisible={changeModalVisible}
        Arry={Array}
        AddNewFilterItem={AddNewFilterItem}
        statusFilterArray={statusFilterArray}
      />
      <Separator small />
      <ItemList DATA_ITEM={DATA_ITEM} addToBasket={addToBasket} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ShopScreen;
