import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors, dimension, fontSizes } from '../../styles';
import Separator from '../Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HeaderLogo = memo(({ reverse, goBack, changeModalVisibility }) => {
  const navigation = useNavigation()

  const onGoBack = () => {
    navigation.goBack()
  }
  return (
    <>
      <View style={[styles.container, reverse && styles.containerReverse]}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/gallery/ic_launcher_round.png')}
          />
          <Text style={styles.text}>Zagrava</Text>
          </View>

          {reverse && goBack && (
          <Pressable onPress={changeModalVisibility ? () => changeModalVisibility(false) : () => onGoBack()} style={{marginLeft:dimension.small}}>
            <Ionicons name={'arrow-back'} size={25} color={colors.darkGrey}/>
          </Pressable>
        )}

      </View>

      <Separator big />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    height: dimension.xbig,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerReverse: {
    flexDirection: 'row-reverse',
    justifyContent:'space-between'
  },
  logoContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: 30,
    marginHorizontal: dimension.xsmall,
  },
  text: {
    marginHorizontal: dimension.small,
    fontSize: fontSizes.headline,
    fontWeight: '800',
    textShadowColor: colors.darkGrey,
    textShadowRadius: 2,
    // color: '#6b695c',
    color: colors.haki,
    letterSpacing: 2,
  },
});

export default HeaderLogo;
