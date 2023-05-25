import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useContext, useState } from 'react';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../context/AuthContext';
const Dashboard = props => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [notificationData, setNotificationData] = useState([])

  useEffect(() => {
    getDataFromFirestore();
    handleNotification();
    // firestore()
    //   .collection('Labs')
    //   .doc(user?.uid)
    //   .collection('Prescriptions')
    //   .get()
    //   .then((val) => {
    //     console.log(val?.data())
    //   })

  }, [])

  const handlePressDeshboard = () => {
    navigation.navigate('Tabs');
  };

  const handlePressPrescription = () => {
    navigation.navigate('Prescription');
  };
  const handlePressGraph = () => {
    navigation.navigate('Graph');
  };
  const handlePressHistory = () => {
    navigation.navigate('History');
  };
  const handlePressAddLabs = () => {
    navigation.navigate('AddLabs');
  };

  const getDataFromFirestore = () => {
    firestore()
      .collection('Labs') // Table Name
      .doc(user.uid)
      .collection('Prescriptions')
      .onSnapshot(snaps => {
        if (!snaps.empty) {
          const data = snaps.docs.map(data =>
            ({ ...data.data(), id: data.id }));
          console.log('data: ', data);
          setNotificationData(data);
        }
      });
  }

  console.log(new Date(Date.now() + 20 * 1000));

  const handleNotification = () => {
    // PushNotification.localNotification({
    //   channelId: "test-channel",
    //   title: "Notification",
    //   message: "Hello World!"
    // })
    // PushNotification.localNotificationSchedule({
    //   channelId: "test-channel",
    //   title: "Notification",
    //   message: "Hello World!",
    //   date: new Date(Date.now() + 20 * 1000)
    // })

    notificationData.forEach((notification) => {
      const { start, end, time, medName } = notification;

      // Convert start and end dates to JavaScript Date objects
      const startDateParts = start.split('/');
      const endDateParts = end.split('/');
      const startTimeParts = time.split(':');

      // Months are zero-based (0-11)
      const startDate = new Date(
        parseInt(startDateParts[2]),
        parseInt(startDateParts[1]) - 1,
        parseInt(startDateParts[0]),
        parseInt(startTimeParts[0]),
        parseInt(startTimeParts[1])
      );

      const endDate = new Date(
        parseInt(endDateParts[2]),
        parseInt(endDateParts[1]) - 1,
        parseInt(endDateParts[0]),
        parseInt(startTimeParts[0]),
        parseInt(startTimeParts[1])
      );

      // Current Date
      const currentDate = new Date();

      if (currentDate >= startDate && currentDate <= endDate) {
        // If the current date is within the start and end date range, schedule the notification
        const timeDifference = startDate.getTime() - currentDate.getTime();

        PushNotification.localNotificationSchedule({
          channelId: "test-channel",
          title: "Medications Reminder",
          message: `Medication: ${medName}`,
          date: new Date(Date.now() + timeDifference),
        });
      }
    });
  }

  return (
    <LinearGradient
      colors={['#0F8F9F', '#0F8F9F', '#7CCFD9', '#ffffff']}
      style={styles.cont}>
      <View style={styles.Logo}>
        <Image
          style={{ height: 80, width: 80 }}
          source={require('../assets/img/logo1.png')}
        />
      </View>
      <Text style={styles.docText}>DASHBOARD</Text>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <FAB
            icon="hospital-building"
            style={styles.fab}
            label="Add Labs"
            onPress={handlePressAddLabs}
            size="large"
            color="#0F8F9F"
          />
          <FAB
            icon="medical-bag"
            style={styles.fab}
            label="Medicines"
            onPress={handlePressPrescription}
            size="large"
            color="#0F8F9F"
          />
        </View>
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <FAB
            icon="chart-bell-curve"
            style={styles.fab}
            label="Graphs"
            size="large"
            color="#0F8F9F"
            onPress={handlePressGraph}
          />
          <FAB
            icon="book-open-page-variant"
            style={styles.fab}
            label="History"
            size="large"
            color="#0F8F9F"
            onPress={handlePressHistory}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => { handleNotification() }} >
        <Text>
          Get Notification
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cont: {
    height: '100%',
    padding: 20,
  },
  Logo: {
    alignItems: 'flex-end',
  },
  docText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
  },

  fab: {
    position: 'relative',
    margin: 15,
    right: 0,
    bottom: 0,
    color: '#0F8F9F',
    width: 130,
    paddingBottom: 30,
    paddingTop: 30,
  },
});

export default Dashboard;
