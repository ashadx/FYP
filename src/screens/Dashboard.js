import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect } from 'react';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

const Dashboard = props => {

  useEffect(() => {
    storeUserData()
  })

  const navigation = useNavigation();

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

  const storeUserData = async (value) => {
    try {
      const jsonValue = JSON.stringify('user')
      await EncryptedStorage.setItem('userData', jsonValue)
    } catch (e) {
      console.log('Error : ', e)
    }
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
