import React, { memo } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles';

const Container = memo(({ children, style }) => {
  const PlatformContainer = () => {
    if (Platform.OS === 'ios') {
      return (
        <SafeAreaView style={styles.safeContainer}>
          <View style={[styles.container, { style }]}>
            {children}
          </View>
        </SafeAreaView>)
    } else if(Platform.OS === 'android'){
      return (
        <View style={[styles.container, { style }]}>
            {children}
          </View>
      )
    }
  }
  return (
    <PlatformContainer/>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  safeContainer:{
    flex:1,
    backgroundColor:colors.white
  }
})

export default Container;
