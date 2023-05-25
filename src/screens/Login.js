import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';
import { AuthAction } from '../context/AuthContext';
import PushNotification from "react-native-push-notification";

const Login = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onSignIn } = useContext(AuthAction);

  useEffect(() => {
    createChannel()
  }, [])

  const handlePressSignUp = () => {
    navigation.navigate('Signup');
  };

  const handlePressLogin = () => {
    if (email !== '' && password !== '') {
      onSignIn(email, password, navigation);
    } else {
      alert('Invalid Email or Password');
    }
  };

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: "Test Channel"
    })
  }

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
      <ScrollView>
        <View style={styles.Logo}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require('../assets/img/logo.png')}
          />
        </View>
        <Text style={styles.docText}>SIGN IN</Text>
        <View>
          <TextInput
            label="Email"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <TextInput
            label="Password"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
        </View>
        <View style={{ alignItems: 'flex-end', paddingEnd: 5, marginBottom: 30 }}>
          <Text style={{ color: 'black', fontWeight: '600' }}>
            Forget Password?{' '}
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Button
            buttonColor="#0F8F9F"
            icon="send"
            mode="contained"
            onPress={handlePressLogin}>
            SIGN IN
          </Button>
        </View>
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
      </ScrollView>
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
    color: '#0F8F9F',
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
    paddingTop: 100,
  },
});

export default Login;
