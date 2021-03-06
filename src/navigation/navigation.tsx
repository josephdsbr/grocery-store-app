import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import OnBoarding from '../views/OnBording';
import SignIn from '../views/SignIn';

const {Screen, Navigator} = createStackNavigator();

const Navigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default Navigation;
