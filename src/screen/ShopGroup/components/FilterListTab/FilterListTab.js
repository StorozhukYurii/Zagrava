import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {width, height} from '../../../../styles/dimensions';
import {colors} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FilterListTab = ({DATA_LIST_TAB}) => {
  const [status, setStatus] = useState('All');
  const setStatusFilter = status => {
    setStatus(status);
  };

  const CategoryBlock = ({item}) => {
    return (
      <TouchableOpacity style={[styles.categoryBlock, status === item.status && styles.btnTabActive]} onPress={() => setStatusFilter(item.status)}>
        <Text style={[styles.text, status === item.status && styles.textTabActive]}>{item.status}</Text>
        <Ionicons size={15} name={'chevron-down-outline'} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_LIST_TAB}
        renderItem={({item}) => <CategoryBlock item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  categoryBlock: {
    borderWidth: 0.5,
    // width: width / 3.5,
    minWidth:60,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    padding: 5,
  },
  icon: {
    padding: 5,
  },
  btnTabActive: {
    backgroundColor: colors.secondary,
  },
  textTabActive:{
    color:colors.main
  }
});

export default FilterListTab;
