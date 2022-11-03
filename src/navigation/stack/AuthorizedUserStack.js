import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';
import screens from '../../constants/screens';

const Stack = createNativeStackNavigator();

const AuthorizedUserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.TabNavigator}
      component={TabNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthorizedUserStack;
