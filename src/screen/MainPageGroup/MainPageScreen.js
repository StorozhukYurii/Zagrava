import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Entype from 'react-native-vector-icons/Entypo'


export const MainPageScreen = () => {
  return (
    
      <View style={{backgroundColor: 'red', flex: 1, justifyContent:'center', alignContent:'center'}}>
        <Text>Hello
            <Entype name={'home'} size={24}/>
        </Text>
      </View>
    
  );
};
