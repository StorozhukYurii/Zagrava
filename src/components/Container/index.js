import React, { memo } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors } from '../../styles';

const Container = memo(({children}) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1
    }
})

export default Container;
