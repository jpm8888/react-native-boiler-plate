import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {options} from './screenOptions';
import {ScreenDummy1} from '../screens/ScreenDummy1';
import {ScreenDummy2} from '../screens/ScreenDummy2';

const StackNav = createStackNavigator();

export const RouteManager = props => {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen
          name="ScreenDummy1"
          component={ScreenDummy1}
          options={{...options, headerShown: false}}
        />
        <StackNav.Screen
          name="ScreenDummy2"
          component={ScreenDummy2}
          options={{...options, headerShown: false}}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};
