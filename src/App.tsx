/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import Navigation from './navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
