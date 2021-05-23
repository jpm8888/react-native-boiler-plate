import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {options} from './screenOptions';
import {DummyScreen1} from '../screens/DummyScreen1';
import {DummyScreen2} from '../screens/DummyScreen2';

const StackNav = createStackNavigator();

export const RouteManager = props => {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen
          name="DummyScreen1"
          component={DummyScreen1}
          options={{...options, headerShown: false}}
        />
        <StackNav.Screen
          name="DummyScreen2"
          component={DummyScreen2}
          options={{...options, headerShown: false}}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};
