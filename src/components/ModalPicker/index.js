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
import {colors, dimension} from '../../styles';

const ModalPicker = ({changeModalVisible, status, AddChose}) => {
  // const Array = ['All', 'Never', 'Second', 'Witcher']

  const ModalWindow = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => AddChose(item, status)}>
        <Text style={styles.text}>{item}</Text>
        {/* <Button title="labal"  /> */}
      </TouchableOpacity>
    );
  };

  const arrayF = ['All'];
  const arrayS = ['Price', 'From a higher price', 'From a lower price'];
  const arrayT = [
    'Type of product',
    'Celtic god',
    'Wicca',
    'Scandinavian god',
    'Sumerian',
    'Candel holders',
    'Ancient Greece',
  ];
  const arrayC = ['Material', 'Oak', 'Pine'];
  const arrayP = ['Rating', 'From a higher rating', 'From a lower rating'];

  return (
    <Pressable
      onPress={() => changeModalVisible(true)}
      style={[styles.container]}>
      <View style={styles.modal}>
        {arrayF.includes(status) && null}
        {arrayS.includes(status) && (
          <FlatList
            data={arrayS}
            renderItem={({item}) => <ModalWindow item={item} />}
          />
        )}
        {arrayT.includes(status) && (
          <FlatList
            data={arrayT}
            renderItem={({item}) => <ModalWindow item={item} />}
          />
        )}
        {arrayC.includes(status) && (
          <FlatList
            data={arrayC}
            renderItem={({item}) => <ModalWindow item={item} />}
          />
        )}
        {arrayP.includes(status) && (
          <FlatList
            data={arrayP}
            renderItem={({item}) => <ModalWindow item={item} />}
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

export default ModalPicker;
