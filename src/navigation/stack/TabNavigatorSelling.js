import React from 'react';
import {Text, View} from 'react-native';

import screens from '../../constants/screens';
import {SellingScreen} from '../../screen/SellingGroup/SellingScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const TabNavigatorSelling = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Selling}
        component={SellingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigatorSelling;
