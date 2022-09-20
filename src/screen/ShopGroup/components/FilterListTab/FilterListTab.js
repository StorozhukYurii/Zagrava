import React, {useState, memo} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {width, height} from '../../../../styles/dimensions';
import {colors} from '../../../../styles';
import CategoryBlock from './CategoryBlock';

const FilterListTab = ({
  setStatusFilter,
  status,
  changeModalVisible,
  isModalVisible,
  AddChose,
  chosen,
  statusFilterArray
}) => {

  

  return (
    <View style={styles.container}>
      <FlatList
        data={!!chosen ? chosen : statusFilterArray}
        renderItem={({item}) => (
          <CategoryBlock
            item={item}
            isModalVisible={isModalVisible}
            status={status}
            setStatusFilter={setStatusFilter}
            changeModalVisible={changeModalVisible}
            AddChose={AddChose}
            chosen={chosen}
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
