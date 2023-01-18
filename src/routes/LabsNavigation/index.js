import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Tab Screens
import AddLabsScreen from '../../screens/AddLabsScreen';
import Heart from '../../screens/Heart';
import Diabetes from '../../screens/Diabetes';
import Kidney from '../../screens/Kidney';
import Custom from '../../screens/Custom';
import Template from '../../screens/Template';

const Stack = createNativeStackNavigator();

const LabsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AddLabsScreen">
      <Stack.Screen name="AddLabsScreen" component={AddLabsScreen} />
      <Stack.Screen name="Heart" component={Heart} />
      <Stack.Screen name="Diabetes" component={Diabetes} />
      <Stack.Screen name="Kidney" component={Kidney} />
      <Stack.Screen name="Custom" component={Custom} />
    </Stack.Navigator>
  );
};

export default LabsNavigation;
