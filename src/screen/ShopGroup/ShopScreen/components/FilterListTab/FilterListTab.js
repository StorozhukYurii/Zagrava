import React, {useState, memo} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {width, height} from '../../../../styles/dimensions';
// import {colors} from '../../../../styles';
import CategoryBlock from './CategoryBlock';

const FilterListTab = ({
  setStatusFilter,
  statusOfFilter,
  changeModalVisible,
  isModalVisible,
  AddNewFilterItem,
  selectedNewFilterArray,
  statusFilterArray
}) => {

  

  return (
    <View style={styles.container}>
      <FlatList
        data={!!selectedNewFilterArray ? selectedNewFilterArray : statusFilterArray}
        renderItem={({item}) => (
          <CategoryBlock
            item={item}
            isModalVisible={isModalVisible}
            statusOfFilter={statusOfFilter}
            setStatusFilter={setStatusFilter}
            changeModalVisible={changeModalVisible}
            AddNewFilterItem={AddNewFilterItem}
            selectedNewFilterArray={selectedNewFilterArray}
            statusFilterArray={statusFilterArray}
            // key={String(item)}
          />
        )}
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

export default memo(FilterListTab);
