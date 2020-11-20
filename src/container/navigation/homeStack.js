import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../home';
import CarouselScreen from '../carousel';
const Stack = createStackNavigator();
function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Screen',
            headerTintColor: 'orange',
            headerStyle: {backgroundColor: 'white'},
          }}
        />
        <Stack.Screen
          name="Carousel"
          component={CarouselScreen}
          options={{
            title: 'Carousel',
            headerTintColor: 'orange',
            headerStyle: {backgroundColor: 'white'},
          }}
        />
      </Stack.Navigator>
  );
}

export default HomeStack;
