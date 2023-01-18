import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = props => {
  const {navigation} = props;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handlePressSignup = () => {
    const data = {
      email: email,
      password: password,
      phone: phone,
      username: username,
    };
    if (email !== '' && password !== '') {
      if (password === confirmPassword) {
        navigation.navigate('AddHistory', {data: data});
        alert('Data Entered');
      } else {
        alert('Password not match!');
      }
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
      <ScrollView>
        <View style={styles.Logo}>
          <Image
            style={{height: 80, width: 80}}
            source={require('/Users/Asad Aslam/Desktop/React Native/NewProject/src/assets/img/logo.png')}
          />
        </View>
        <Text style={styles.docText}>SIGN IN</Text>
        <View>
          <TextInput
            label="Username"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={username}
            onChangeText={setUsername}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
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
            label="Phone"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={phone}
            onChangeText={setPhone}
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
            right={<TextInput.Icon icon="eye" />}
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <TextInput
            label="Confirm Password"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            mode="outlined"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            buttonColor="#0F8F9F"
            icon="send"
            mode="contained"
            onPress={handlePressSignup}>
            SIGN IN
          </Button>
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
    paddingTop: 40,
  },
});

export default SignUp;
