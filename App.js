import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

// import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/routes/StackNavigator';
import ContextProvider from './src/context/ContextProvider';
import { requestUserPermission, getToken, handleNotifications } from './src/PushNotifications/PushNotification'
import PushNotification from 'react-native-push-notification';

const App = () => {

  // useEffect(() => {
  //   // Configure notification handling
  //   PushNotification.configure({
  //     // Called when a remote or local notification is received
  //     onNotification: function (notification) {
  //       console.log('Received notification:', notification);

  //       // Display a notification popup
  //       PushNotification.localNotification({
  //         channelId: 'channel-id', // Specify a notification channel ID (required for Android)
  //         title: notification.title,
  //         message: notification.message,
  //       });
  //     },
  //   });

  //   // Request permission for notifications (if needed)
  //   PushNotification.requestPermissions();
  // }, []);

  useEffect(() => {
    const setupPushNotifications = async () => {
      const hasPermission = await requestUserPermission();
      if (hasPermission) {
        await getToken();
      }
      handleNotifications();
    };

    setupPushNotifications();
  }, []);


  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
