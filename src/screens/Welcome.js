import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';

const Welcome = props => {
  // const { navigation } = props;

  const navigation = useNavigation();

  const [screenName, setScreenName] = useState("")

  const handlePress = () => {
    navigation.navigate('Login');
  };

  const getScreen = async () => {
    const jsonValue = await EncryptedStorage.getItem('userData');
    console.log(jsonValue);
    if (jsonValue === null) {
      setTimeout(() => {
        navigation.dispatch(
          StackActions.replace('Login', {})
        );
      }, 3000)
    } else {
      setTimeout(() => {

        navigation.reset({
          index: 0,
          routes: [{ name: 'Tabs' }],
        });
      }, 3000)
    }
  }

  // useEffect(() => {
  //   getScreen()
  // }, [])

  // const getUserData = async () => {
  //   try {
  //     const jsonValue = await EncryptedStorage.getItem('userData');
  //     console.log('jsonValue: ', jsonValue);
  //     // jsonValue != null ? navigation.navigate("Tabs") : null
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log('Error: ', e);
  //   }
  // };

  // const getScreenName = async () => {
  //   try {
  //     const jsonValue = await EncryptedStorage.getItem('userData');
  //     console.log('jsonValue: ', jsonValue);
  //     if (jsonValue == null) {
  //       setScreenName("Login")
  //     } else {
  //       setScreenName("Tabs")
  //     }
  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;

  //   } catch (e) {
  //     console.log('Error: ', e);
  //   }
  // }

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
      <Text style={styles.docText}>Welcome To Your Health Care Partner</Text>
      <View style={styles.doc}>
        <Image
          style={{ height: '70%', width: '70%' }}
          source={require('../assets/img/doc.png')}
        />
      </View>
      <Button
        buttonColor="#0F8F9F"
        icon="send"
        mode="contained"
        onPress={getScreen}>
        NEXT
      </Button>
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
  doc: {
    alignItems: 'center',
    marginBottom: -200,
  },
  docText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
  },
});

export default Welcome;
