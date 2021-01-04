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
import store from './store';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
