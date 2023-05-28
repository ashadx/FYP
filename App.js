import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/routes/StackNavigator';
import ContextProvider from './src/context/ContextProvider';
import { requestUserPermission, getToken, handleNotifications } from './src/PushNotifications/PushNotification';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     PushNotification.localNotification({
  //       message: remoteMessage.notification.body,
  //       title: remoteMessage.notification.title,
  //       channelId: 'test-channel'
  //       // bigPictureUrl: remoteMessage.notification.android.imageUrl,
  //       // smallIcon: remoteMessage.notification.android.imageUrl,
  //     });
  //   });
  //   return unsubscribe;
  // }, []);


  // useEffect(() => {
  //   const setupPushNotifications = async () => {
  //     const hasPermission = await requestUserPermission();
  //     if (hasPermission) {
  //       await getToken();
  //     }
  //     handleNotifications();
  //   };

  //   setupPushNotifications();
  // }, []);

  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
