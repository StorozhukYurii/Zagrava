import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, dimension} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Rank = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.rankContainer}>
        <View>
            <Ionicons name={'happy'} size={60} style={styles.icon}/>
        </View>
        <View>
          <Text style={[styles.text,{marginLeft:dimension.small, marginBottom:dimension.xsmall}]}>Your rank:</Text>
          <Text style={[styles.text,{marginLeft:dimension.small}]}>Beginner</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pointContainer}>
        <Text style={[styles.text, {marginBottom:dimension.xsmall}]}>Balance</Text>
        <Text style={[styles.text]}>100 points</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: dimension.xbig * 1.8,
    padding: dimension.small,
    justifyContent: 'space-between',
    marginVertical:dimension.small
  },
  rankContainer: {
    backgroundColor: colors.main,
    width: dimension.width * 0.6,
    borderRadius: dimension.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  pointContainer: {
    backgroundColor: colors.secondary,
    width: dimension.width * 0.34,
    borderRadius: dimension.borderRadius,
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    marginLeft:20,
    color:colors.dark
  },
  text:{
    color:colors.dark,
    fontWeight:'700',
  }
});

export default Rank;
