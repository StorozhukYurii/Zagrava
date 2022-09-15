import React from 'react';
import {Text, View} from 'react-native';

import screens from '../../constants/screens';
import {ShopScreen} from '../../screen/ShopGroup/ShopScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const TabNavigatorPurchaseHistory = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Shop}
        component={ShopScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigatorPurchaseHistory;
