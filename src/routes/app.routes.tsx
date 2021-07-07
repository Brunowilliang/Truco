import React from 'react';
import { ButtonSettings } from '../components/ButtonSettings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderBackButton, createStackNavigator } from '@react-navigation/stack';


import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export function AppRoutes(){
  const theme = useTheme();
  return (
    <>
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: 100,
        },
        headerTitleStyle: {
          fontFamily: theme.fonts.bold,
          fontSize: 17,
        },
        headerBackTitleStyle: {
          fontFamily: theme.fonts.bold,
          fontSize: 17,
        },
        headerTintColor: theme.colors.white,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          title: 'Contador de Truco',
          headerRight: () => (
            <ButtonSettings />
          ),
        }} 
      />
    </Stack.Navigator>
    </>
  );
}