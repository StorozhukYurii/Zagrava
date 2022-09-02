import React from 'react';
import {Text, View} from 'react-native';

import screens from '../../constants/screens'
import {MainPageScreen} from '../../screen/MainPageGroup/MainPageScreen'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const TabNavigatorMain = () => {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Main}
        component={MainPageScreen}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigatorMain;
