import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, dimension, fontSizes} from '../../styles';
import Separator from '../Separator';

const HeaderLogo = ({reverse}) => {
  return (
    <>
      <View style={[styles.container, reverse && styles.containerReverse]}>
        <Image
          style={styles.logo}
          source={require('../../assets/gallery/ic_launcher_round.png')}
        />
        <Text style={styles.text}>Zagrava</Text>
      </View>
      <Separator big />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: dimension.xbig,
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: dimension.small,
    // left:-30
  },
  containerReverse:{
    height: dimension.xbig,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: fontSizes.headline,
    fontWeight: '800',
    textShadowColor: colors.darkGrey,
    textShadowRadius: 10,
    color: colors.darkGrey,
    letterSpacing: 4,
  },
});

export default HeaderLogo;
