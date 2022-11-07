import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {width, height} from '../../../../../styles/dimensions';
import ModalPicker from '../../../../../components/ModalPicker';
import {colors} from '../../../../../styles';

const CategoryBlock = ({
  chosen,
  item,
  statusFilterArray,
  isModalVisible,
  statusOfFilter,
  setStatusFilter,
  changeModalVisible,
  AddNewFilterItem,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.categoryBlock, statusOfFilter === item && styles.btnTabActive]}
        onPress={() => setStatusFilter(item)}>
        <Text style={[styles.text, statusOfFilter === item && styles.textTabActive]}>
          {/* {chosen === null && item} */}
          {item}
        </Text>
        <Ionicons size={15} name={'chevron-down-outline'} style={styles.icon} />
      </TouchableOpacity>
      {statusOfFilter === 'All' ? (changeModalVisible(false)):<Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        // onRequestClose={changeModalVisible(false)}
        >
        <ModalPicker
          statusOfFilter={statusOfFilter}
          statusFilterArray={statusFilterArray}
          AddNewFilterItem={AddNewFilterItem}
          changeModalVisible={changeModalVisible}
        />
      </Modal>}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBlock: {
    borderWidth: 0.5,
    // width: width / 3.5,
    minWidth: 60,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    padding: 5,
    fontWeight:'500'
  },
  icon: {
    padding: 5,
  },
  btnTabActive: {
    backgroundColor: colors.secondary,
  },
  textTabActive: {
    color: colors.main,
  },
});

export default CategoryBlock;
