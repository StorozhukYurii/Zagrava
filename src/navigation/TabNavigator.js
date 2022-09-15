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
import TabNavigatorIcon from './components/TabNavigatorIcon';

const Tab = createBottomTabNavigator()


const TabNavigator = () => {

    const [isBusiness, setIsBusiness] = useState(false)

return(
    <Tab.Navigator
        initialRouteName={screens.ShopTab}
        screenOptions={({route}) => ({
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon:({focused, pressed, color}) => {
                switch(route.name){
                    case screens.MainTab:
                        return (
                            <TabNavigatorIcon
                            focused={focused}
                            pressed={pressed}
                            title='Main'
                            name={focused || pressed ? "home" : "home-outline"}
                            />
                        )
                    case screens.ChatTab:
                        return (
                            <TabNavigatorIcon
                            focused={focused}
                            pressed={pressed}
                            title='Chat'
                            name={focused || pressed ? "chatbubble" : "chatbubble-outline"}
                            />
                        )
                    case screens.ShopTab:
                        return (
                            <TabNavigatorIcon
                            focused={focused}
                            pressed={pressed}
                            title='Store'
                            name={focused || pressed ? "planet" : "planet-outline"}
                            />
                        )
                    case screens.PurchaseHistoryTab:
                        return (
                            <TabNavigatorIcon
                            focused={focused}
                            pressed={pressed}
                            title='Purchases'
                            name={focused || pressed ? "basket" : "basket-outline"}
                            />
                        )
                    case screens.ProfileTab:
                        return (
                            <TabNavigatorIcon
                            focused={focused}
                            pressed={pressed}
                            title='Profile'
                            name={focused || pressed ? "person" : "person-outline"}
                            />
                        )
                    default:
                        break
                }
            }
            // headerTransparent: true,
            // tabBarActiveBackgroundColor: 'transparent',
          })}>
    <Tab.Screen
        name={screens.MainTab}
        component={TabNavigatorMain}
        options
    />
    <Tab.Screen
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
    />
    </Tab.Navigator>
)
}

export default TabNavigator;