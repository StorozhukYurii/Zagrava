import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Container from '../../../components/Container';
import HeaderLogo from '../../../components/HeaderLogo';
import screens from '../../../constants/screens';
import {colors, dimension, fontSizes} from '../../../styles';
import NewsListInMainScreen from './components/NewsListInMainScreen';
import Rank from './components/Rank';

export const MainPageScreen = ({navigation}) => {

  const onOpenNews = () => {
    navigation.navigate(screens.News)
  }

  return (
    <Container>
      <HeaderLogo />
      <Image
        source={{
          uri: 'https://i.etsystatic.com/isbl/1666b9/41348297/isbl_1680x420.41348297_ei5887uw.jpg?version=0',
        }}
        style={{height: 120}}
      />
      <Rank />
      <View style={styles.newsUrlContainer}>
        <Text
          style={[
            styles.newsUrlText,
            {fontSize: fontSizes.headline, color: colors.dark},
          ]}>
          News
        </Text>
        <TouchableOpacity onPress={onOpenNews}>
          <Text
            style={[
              styles.newsUrlText,
              {fontSize: fontSizes.medium, color: colors.main, textDecorationLine:"underline"},
            ]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <NewsListInMainScreen />
    </Container>
  );
};

const styles = StyleSheet.create({
  newsUrlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: dimension.medium,
    alignItems: 'center',
  },
  newsUrlText: {
    fontWeight: '800',
  },
});
