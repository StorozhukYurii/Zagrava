import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles';

const Container = ({ children, style }) => {
  return (
    <View style={{ flex: 1 }}>
      
      {Platform.OS === 'ios' && (<SafeAreaView style={styles.safeContainer}>
        <View style={[styles.container, style]}>
          {children}
        </View>
      </SafeAreaView>)}
      
      {Platform.OS === 'android' && (<View style={[styles.container, style]}>
        {children}
      </View>)}

    </View>)
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export default Container;
