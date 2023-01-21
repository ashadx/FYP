import {View, Text} from 'react-native';
import React from 'react';

// import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/routes/StackNavigator';
import ContextProvider from './src/context/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
