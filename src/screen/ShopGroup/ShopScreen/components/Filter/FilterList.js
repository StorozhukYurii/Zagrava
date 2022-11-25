import React, { useState, memo } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
// import {width, height} from '../../../../styles/dimensions';
// import {colors} from '../../../../styles';
import Category from './Category';

const FilterList = () => {

  const initialFilterArray = useSelector(state => state.filter.initialFilter)

  return (
    <View style={styles.container}>
      <FlatList
        data={initialFilterArray}
        renderItem={({ item }) => <Category item={item} />}
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
});

export default memo(FilterList);
