import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
// import {width, height} from '../../../../../styles/dimensions';
// import ModalPicker from '../../../../../components/ModalPicker';
import FilterModal from '../../../../../modals/FilterModal';
import {colors} from '../../../../../styles';
import {onChangeActiveFilter} from '../../../../../store/filterSlice/filterSlice';
import {useState} from 'react';
import {useCallback} from 'react';
import {useMemo} from 'react';

const Category = ({item}) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filter.activeFilter);

  const [isModalVisible, setModalVisible] = useState(false);

  const changeModalVisible = useCallback(bool => {
    setModalVisible(bool);
    dispatch(onChangeActiveFilter(item));
  });

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.categoryBlock,
          activeFilter === item && styles.btnTabActive,
        ]}
        onPress={() => changeModalVisible(true)}>
        <Text
          style={[styles.text, activeFilter === item && styles.textTabActive]}>
          {/* {chosen === null && item} */}
          {item}
        </Text>
        <Ionicons size={15} name={isModalVisible ? 'chevron-up-outline' : 'chevron-down-outline'} style={styles.icon} />
      </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => changeModalVisible(false)}>
          <FilterModal changeModalVisible={changeModalVisible} />
        </Modal>
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
    fontWeight: '500',
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

export default Category;
