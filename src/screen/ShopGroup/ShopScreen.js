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
  const statusFilterArray = ['All', 'Price', 'Type of product', 'Material', 'Rating']
  const [status, setStatus] = useState('All');
  const setStatusFilter = (status) => {
    // setModalVisible(!isModalVisible)
    changeModalVisible(true)
    setStatus(status);
    console.log('статус коли натискаєш на кнопку  фільтрів',status)
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const [chosen, setChosen] = useState(null)

  const AddChose = useCallback((item, status) => {
    console.log('масив фільтрів на початку перед всім ',statusFilterArray)
    console.log('статус коли нажимаєш на один з підфільтрів ',status)
    console.log('новий масив фільтрів, на початку нуль ',chosen)
    console.log('підфільтр який приходить при натисканні ',item)
    console.log('ще якийсь статус ', status)
    // const arr = statusArray.push(status)
    // return arr
    
    const newArr = Object.assign(!!chosen ? chosen : statusFilterArray)
    const index = newArr.findIndex(el => el == status)
    const removed = newArr.splice(index,1, item)
    console.log('елемент який було видалено з масиву фільтрів ',removed)
    // console.log(newArr.includes(status))
    console.log('масив фільтрів після додання нового елемента і видалення старого ',statusFilterArray)
    setChosen(newArr) 
    setStatus(item)
    changeModalVisible(false)
    // statusArray.push(item)
    console.log('новий масив фільтрів ',chosen)

  })

  const changeModalVisible = (bool) => {
   setModalVisible(bool);
  };

  const [text, onChangeText] = useState('');

  const [dataList, setDataList] = useState(DATA_ITEM);

  const [counter, setCounter] = useState(0);

  const addToBasket = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <SearchInput onChangeText={onChangeText} text={text} counter={counter} />
      <FilterListTab
        chosen={chosen}
        status={status}
        setStatusFilter={setStatusFilter}
        isModalVisible={isModalVisible}
        changeModalVisible={changeModalVisible}
        Arry={Array}
        AddChose={AddChose}
        statusFilterArray={statusFilterArray}
      />
      <Separator small />
      <ItemList DATA_ITEM={DATA_ITEM} addToBasket={addToBasket} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ShopScreen;
