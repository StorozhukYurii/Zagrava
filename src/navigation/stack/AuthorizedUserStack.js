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
import LogInScreen from '../../screen/AuthorizationGroup/LogInScreen';
import SingUpScreen from '../../screen/AuthorizationGroup/SingUpScreen';

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
      options={{headerShown:false}}
    />
    <Stack.Screen
      name={screens.NewsItem}
      component={NewsItemScreen}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name={screens.OrderList}
      component={OrderListScreen}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name={screens.Product}
      component={ProductScreen}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name={screens.Favorite}
      component={FavoriteScreen}
      options={{headerShown:false}}
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
      options={{headerShown:false}}
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
    <Stack.Screen
      name={screens.SingUp}
      component={SingUpScreen}
    />
    <Stack.Screen
      name={screens.LogIn}
      component={LogInScreen}
    />
  </Stack.Navigator>
);

export default AuthorizedUserStack;