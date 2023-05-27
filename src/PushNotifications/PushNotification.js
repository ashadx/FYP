import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import PushNotification from 'react-native-push-notification';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    return (
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
};

export const getToken = async () => {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
        // You can send the fcmToken to your server for targeting specific devices.
        console.log('FCM Token:', fcmToken);
        firestore()
            .collection('FCM Token')
            .doc('Token')
            .set({
                Token: fcmToken,
            })
            .then(() => {
                console.log('Token added!');
            })
            .catch(error => {
                console.log('Failed to add token:', error);
            });
    } else {
        console.log('Failed to get FCM token.');
    }
};

export const handleNotifications = () => {
    messaging().onMessage(async remoteMessage => {
        // console.log('Received a notification in the foreground:', remoteMessage);
        // PushNotification.createChannel({
        //     channelId: 'test-channel',
        //     channelName: 'Test Channel'
        // })
        // PushNotification.localNotification({
        //     title: remoteMessage?.notification?.title,
        //     body: remoteMessage?.notification?.body,
        //     channelId: 'test-channel',
        //     allowWhileIdle: true
        // })
        // Handle the received notification in the foreground.
        // You can use this callback to display the notification or perform any other action.
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Received a background notification:', remoteMessage);
        // Handle the received notification in the background.
    });
};
