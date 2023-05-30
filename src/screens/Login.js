import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';
import { AuthAction } from '../context/AuthContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import ForUser from '../components/ForUser';
import ForSuperUser from '../components/ForSuperUser';
import { useEffect } from 'react/cjs/react.development';

const Login = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserOn, setIsUserOn] = useState(true)
  const [isSuperUserOn, setIsSuperUserOn] = useState(false)

  const { onSignIn } = useContext(AuthAction);

  const handlePressSignUp = () => {
    navigation.navigate('Signup');
  };

  const handlePressLogin = () => {
    if (email !== '' && password !== '') {
      onSignIn(email, password);
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <LinearGradient
      colors={[
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#7CCFD9',
        '#0F8F9F',
      ]}
      style={styles.cont}>
      {/* <ScrollView> */}
      <View style={styles.Logo}>
        <Image
          style={{ height: 80, width: 80 }}
          source={require('../assets/img/logo.png')}
        />
      </View>
      <Text style={styles.docText}>SIGN IN</Text>
      <View style={styles.toggleButtonContainer} >
        <TouchableOpacity
          onPress={() => {
            setIsUserOn(true)
            setIsSuperUserOn(false)
          }}
          style={[styles.whenUserOn, isSuperUserOn ? styles.whenUserOff : styles.whenUserOn]} >
          <Text style={[styles.userOnText, isUserOn ? styles.userOnText : styles.userOffText]} >User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsSuperUserOn(true)
            setIsUserOn(false)
          }}
          style={[styles.whenSuperUserOn, isUserOn ? styles.whenSuperUserOff : styles.whenSuperUserOn]} >
          <Text style={[styles.userOnText, isUserOn ? styles.superUserOnText : styles.superUserOffText]} >Super User</Text>
        </TouchableOpacity>
      </View>
      {isUserOn ? <ForUser /> : <ForSuperUser />}

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: 'black', fontWeight: '600' }}>
          Don't have Account?
          <TouchableOpacity
            style={{ color: '#0F8F9F', fontWeight: '800' }}
            onPress={handlePressSignUp}>
            <Text style={{ color: 'black', fontWeight: '600' }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      {/* </ScrollView> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cont: {
    height: '100%',
    // flex: 1,
    width: '100%',
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
    color: '#0F8F9F',
    fontSize: 30,
    textAlign: 'left',
    // padding: 20,
    // paddingTop: 100,
  },
  toggleButtonContainer: {
    height: '14%',
    flexDirection: 'row',
    width: '80%',
    // backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center'
  },
  whenUserOn: {
    backgroundColor: 'black',
    width: '40%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  whenUserOff: {
    backgroundColor: 'white',
    width: '40%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  whenSuperUserOn: {
    backgroundColor: 'black',
    width: '40%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  whenSuperUserOff: {
    backgroundColor: 'white',
    width: '40%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userOnText: {
    color: 'white'
  },
  userOffText: {
    color: 'black'
  },
  superUserOffText: {
    color: 'white'
  },
  superUserOnText: {
    color: 'black'
  },
});

export default Login;
