import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import AuthNavigator from '../AuthNavigator';

// Tab Screens
import TabNavigator from '../TabNavigator';
import AddHistory from '../../screens/AddHistory';
import SuperUserDashboard from '../../screens/SuperUserDashboard';
import Login from '../../screens/Login';
import PdfScreen from '../../screens/PdfScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="PdfScreen" component={PdfScreen} />
      <Stack.Screen name="AddHistory" component={AddHistory} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SuperUserDashboard" component={SuperUserDashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
