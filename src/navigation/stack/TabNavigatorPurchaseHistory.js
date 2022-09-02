import React from 'react';
import {Text, View} from 'react-native';

import screens from '../../constants/screens'
import {PurchaseHistoryScreen} from '../../screen/PurchanseHistoryGroup/PurchaseHistoryScreen'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const TabNavigatorPurchaseHistory = () => {

  const Stack = createNativeStackNavigator()

  return (
   <Stack.Navigator>
      <Stack.Screen name={screens.PurchaseHistory} component={PurchaseHistoryScreen}/>
   </Stack.Navigator>
  );
};

export default TabNavigatorPurchaseHistory;
