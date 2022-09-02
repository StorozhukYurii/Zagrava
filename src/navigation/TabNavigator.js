import React from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useState } from 'react';

import screens from '../constants/screens'
import TabNavigatorChat from './stack/TabNavigatorChat'
import TabNavigatorShop from './stack/TabNavigatorShop'
import TabNavigatorMain from './stack/TabNavigatorMain'
import TabNavigatorProfile from './stack/TabNavigatorProfile'
import TabNavigatorSelling from './stack/TabNavigatorSelling'
import TabNavigatorPurchaseHistory from './stack/TabNavigatorPurchaseHistory'

const Tab = createBottomTabNavigator()


const TabNavigator = () => {

    const [isBusiness, setIsBusiness] = useState(false)

return(
    <Tab.Navigator
        initialRouteName={screens.MainTab}
        screenOptions={{
            headerShown:false,
            headerTransparent: true,
            tabBarActiveBackgroundColor: 'transparent',
          }}>
    <Tab.Screen
        name={screens.MainTab}
        component={TabNavigatorMain}
        options
    />
    {/* <Tab.Screen
        name={screens.ChatTab}
        component={TabNavigatorChat}
        options
    />
    <Tab.Screen
        name={screens.ShopTab}
        component={isBusiness ? TabNavigatorSelling : TabNavigatorShop}
        options
    />
    <Tab.Screen
        name={screens.PurchaseHistoryTab}
        component={TabNavigatorPurchaseHistory}
        options
    />
    <Tab.Screen
        name={screens.ProfileTab}
        component={TabNavigatorProfile}
        options
    /> */}
    </Tab.Navigator>
)
}

export default TabNavigator;