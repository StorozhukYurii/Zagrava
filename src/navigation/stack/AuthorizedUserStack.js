import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';
import screens from '../../constants/screens';
import NewsScreen from '../../screen/NewsGroup/NewsScreen/NewsScreen';
import NewsItemScreen from '../../screen/NewsGroup/NewsItemScreen';
import OrderListScreen from '../../screen/OrderListGroup/OrderListScreen';
import ProductScreen from '../../screen/ShopGroup/ProductScreen';
import FavoriteScreen from '../../screen/ProfileGroup/FavoriteScreen';
import ProfileInfoScreen from '../../screen/ProfileGroup/ProfileInfoScreen';
import CitySettingScreen from '../../screen/ProfileGroup/CitySettingScreen';
import ConfigurationScreen from '../../screen/ProfileGroup/ConfigurationScreen';
import LanguageScreen from '../../screen/ProfileGroup/LanguageScreen';
import TermsOfServiceScreen from '../../screen/ProfileGroup/TermsOfServiceScreen';
import PurchaseScreen from '../../screen/PurchanseHistoryGroup/PurchaseScreen';
import RankScreen from '../../screen/ProfileGroup/RankScreen';

const Stack = createNativeStackNavigator();

const AuthorizedUserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.TabNavigator}
      component={TabNavigator}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={screens.News}
      component={NewsScreen}
      options={{headerTitle:'News'}}
    />
    <Stack.Screen
      name={screens.NewsItem}
      component={NewsItemScreen}
    />
    <Stack.Screen
      name={screens.OrderList}
      component={OrderListScreen}
    />
    <Stack.Screen
      name={screens.Product}
      component={ProductScreen}
    />
    <Stack.Screen
      name={screens.Favorite}
      component={FavoriteScreen}
    />
    <Stack.Screen
      name={screens.ProfileInfo}
      component={ProfileInfoScreen}
    />
    <Stack.Screen
      name={screens.CitySetting}
      component={CitySettingScreen}
    />
    <Stack.Screen
      name={screens.Configuration}
      component={ConfigurationScreen}
    />
    <Stack.Screen
      name={screens.TermsOfService}
      component={TermsOfServiceScreen}
    />
    <Stack.Screen
      name={screens.Language}
      component={LanguageScreen}
    />
    <Stack.Screen
      name={screens.Rank}
      component={RankScreen}
    />
    <Stack.Screen
      name={screens.Purchase}
      component={PurchaseScreen}
    />
  </Stack.Navigator>
);

export default AuthorizedUserStack;