import messaging from '@react-native-firebase/messaging';

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

    } else {
        console.log('Failed to get FCM token.');
    }
};

export const handleNotifications = () => {
    messaging().onMessage(async remoteMessage => {
        console.log('Received a notification in the foreground:', remoteMessage);
        // Handle the received notification in the foreground.
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Received a background notification:', remoteMessage);
        // Handle the received notification in the background.
    });
};
