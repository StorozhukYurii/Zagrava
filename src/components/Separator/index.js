import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../styles';

const Separator = ({big, small}) => {
  return (
    <>
      {small && <View style={{height: 1, backgroundColor: colors.silver}}/>}

      {big && <View style={{height:2, backgroundColor:colors.silver}}/>}
    </>
  );
};

export default Separator;
