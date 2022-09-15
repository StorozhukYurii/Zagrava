import React from 'react';
import {Text, View} from 'react-native';

import screens from '../../constants/screens';
import {ChatScreen} from '../../screen/ChatGroup/ChatScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const TabNavigatorChat = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Chat}
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigatorChat;
