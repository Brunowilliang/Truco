import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes';
import { CountProvider } from './src/Context/Count';

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fonstLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <CountProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </CountProvider>
    </ThemeProvider>
  )
}
