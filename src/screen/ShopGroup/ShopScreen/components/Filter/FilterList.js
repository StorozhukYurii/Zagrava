import React, {useState, memo} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
// import {width, height} from '../../../../styles/dimensions';
// import {colors} from '../../../../styles';
import Category from './Category';

const FilterList = () => {
//   const allArray = useSelector(state => state.filter.allArray);
//   const priceArray = useSelector(state => state.filter.priceArray);
//   const typeArray = useSelector(state => state.filter.typeArray);
//   const materialArray = useSelector(state => state.filter.materialArray);
//   const ratingArray = useSelector(state => state.filter.ratingArray);
   const initialFilterArray = useSelector(state => state.filter.initialFilter)
//   const initialFilterArray = [allArray[0], priceArray[0], typeArray[0], materialArray[0], ratingArray[0]]


  return (
    <View style={styles.container}>
      <FlatList
        data={initialFilterArray}
        renderItem={({item}) => <Category item={item} />}
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
