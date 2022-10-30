import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, dimension, fontSizes} from '../../styles';

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/gallery/ic_launcher_round.png')}
      />
      <Text style={styles.text}>Zagrava</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: dimension.xbig,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:dimension.small
  },
  logo:{
    height: 45,
    width: 45,
    marginLeft:10,
  },
  text:{
    marginLeft:10,
    fontSize:fontSizes.headline,
    fontWeight:'800',
    textShadowColor:colors.darkGrey,
    textShadowRadius:10,
    color:colors.darkGrey,
    letterSpacing:4,
  },
});

export default HeaderLogo;
