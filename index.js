/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification from 'react-native-push-notification'

PushNotification.createChannel({
    channelId: 'test-channel',
    channelName: 'Test Channel'
})

AppRegistry.registerComponent(appName, () => App);
