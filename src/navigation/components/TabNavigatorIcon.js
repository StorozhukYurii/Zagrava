import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width / 5;

export const TabNavigatorIcon = ({name, title}) => {
  return (
    <View style={s.container} accessible={true}>
      <Ionicons style={s.icon} name={name} size={28} />
      <Text style={s.text}>{title}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: windowWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.main,
  },
  text: {
    fontSize: 10,
    color: colors.main,
  },
});

export default TabNavigatorIcon;
