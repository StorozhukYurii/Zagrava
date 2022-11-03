import React from 'react';
import {Text, View} from 'react-native';

import screens from '../../constants/screens';
import {ProfileScreen} from '../../screen/ProfileGroup/ProfileScreen/ProfileScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const TabNavigatorProfile = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigatorProfile;
