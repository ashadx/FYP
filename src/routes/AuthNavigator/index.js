import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import Welcome from '../../screens/Welcome';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import Template from '../../screens/Template';
import AddHistory from '../../screens/AddHistory';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Template" component={Template} />
      <Stack.Screen name="AddHistory" component={AddHistory} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
