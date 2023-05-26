import React, { useEffect, useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FAB } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [notificationData, setNotificationData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getDataFromFirestore();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      handleNotification();
    }, [])
  );

  const getDataFromFirestore = () => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Prescriptions')
      .onSnapshot((snaps) => {
        if (!snaps.empty) {
          const data = snaps.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setNotificationData(data);
        }
      });
  };

  const handleNotification = () => {
    console.log('notificationData:', notificationData);

    const currentDate = new Date();

    notificationData.forEach((notification) => {
      const { start, end, time, medName } = notification;

      const startDateParts = start.split('/');
      const endDateParts = end.split('/');
      const startTimeParts = time.split(':');

      // console.log('startDateParts: ', startDateParts[2]);
      // console.log('endDateParts: ', endDateParts);
      // console.log('startTimeParts: ', startTimeParts);

      const startDate = new Date(
        parseInt("20" + startDateParts[2]),
        parseInt(startDateParts[1]) - 1,
        parseInt(startDateParts[0]),
        parseInt(startTimeParts[0]),
        parseInt(startTimeParts[1])
      );

      const endDate = new Date(
        parseInt("20" + endDateParts[2]),
        parseInt(endDateParts[1]) - 1,
        parseInt(endDateParts[0]),
        parseInt(startTimeParts[0]),
        parseInt(startTimeParts[1])
      );

      // console.log('currentDate: ', currentDate);
      // console.log('startDate: ', startDate);
      // console.log('endDate: ', endDate);
      // console.log('currentDate >= startDate: ', currentDate >= startDate);
      // console.log('currentDate <= endDate: ', currentDate <= endDate);

      console.log('startDate.getTime(): ', startDate.getTime())
      console.log('currentDate.getTime(): ', currentDate.getTime());

      if (currentDate >= startDate && currentDate <= endDate) {
        const timeDifference = startDate.getTime() - currentDate.getTime();
        console.log('timeDifference: ', timeDifference);
        PushNotification.localNotificationSchedule({
          channelId: 'test-channel',
          title: 'Medications Reminder',
          message: `Medication: ${medName}`,
          date: new Date(Date.now() + timeDifference),
        });
      }
    });
  };



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

  return (
    <LinearGradient
      colors={['#0F8F9F', '#0F8F9F', '#7CCFD9', '#ffffff']}
      style={styles.cont}
    >
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
      <TouchableOpacity onPress={handleNotification}>
        <Text>Get Notification</Text>
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
