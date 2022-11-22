import React from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {colors, dimension} from '../../styles';
import { onChangeAllFilter,onChangeMaterialFilter, onChangeOrderFilter, onChangeTypeFilter, onChangeActiveFilter } from '../../store/filterSlice/filterSlice';

const FilterModal = ({changeModalVisible}) => {
  const dispatch = useDispatch()

    const initialFilter = useSelector(state => state.filter.initialFilter)
    const activeFilter = useSelector(state => state.filter.activeFilter)
    const orderArray = useSelector(state => state.filter.orderArray)
    const typeArray = useSelector(state => state.filter.typeArray)
    const materialArray = useSelector(state => state.filter.materialArray)
    const allArray = useSelector(state => state.filter.allArray)
    
  const ModalWindow = ({item, onChange}) => {
    const changeValue = () => {
      dispatch(onChange(item))
      changeModalVisible(false)
      dispatch(onChangeActiveFilter(item))
      console.log(item)
    }

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => changeValue()}
        >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Pressable
      onPress={() => changeModalVisible(false)}
      style={[styles.container]}>
      <View style={styles.modal}>
        {/* {activeFilter === 'All'} */}
        {allArray.includes(activeFilter) && (
          <FlatList
            data={allArray}
            renderItem={({item}) => <ModalWindow item={item} onChange={onChangeAllFilter} />}
          />
        )}
        {orderArray.includes(activeFilter) && (
          <FlatList
            data={orderArray}
            renderItem={({item}) => <ModalWindow item={item} onChange={onChangeOrderFilter} />}
          />
        )}
        {typeArray.includes(activeFilter) && (
          <FlatList
            data={typeArray}
            renderItem={({item}) => <ModalWindow item={item} onChange={onChangeTypeFilter}/>}
          />
        )}
        {materialArray.includes(activeFilter) && (
          <FlatList
            data={materialArray}
            renderItem={({item}) => <ModalWindow item={item} onChange={onChangeMaterialFilter}/>}
          />
        )}
        
        {/* <Button title='label' onPress={() => console.log(item)}/>       */}
        <Pressable onPress={()=>  changeModalVisible(false)}>
          <Text style={styles.textCancel}>Cancel, go back</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: dimension.width / 1.2,
    marginTop: 100,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.silver,
    // height:'100%',
  },
  itemContainer: {
    backgroundColor: colors.secondary,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
  },
  textCancel: {
    textAlign: 'center',
    paddingVertical:10,
    textDecorationLine:'underline'
  },
});

export default FilterModal;
