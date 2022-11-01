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

import Container from '../../components/Container';
import HeaderLogo from '../../components/HeaderLogo';
import {colors, dimension, fontSizes} from '../../styles';
import NewsList from './components/NewsList';
import Rank from './components/Rank';

export const MainPageScreen = ({navigation}) => {
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
        <TouchableOpacity>
          <Text
            style={[
              styles.newsUrlText,
              {fontSize: fontSizes.medium, color: colors.main},
            ]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <NewsList />
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
