import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../home';
import HomeStack from './homeStack';
const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

export default Navigation;
