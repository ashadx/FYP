import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';

import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {AuthAction} from '../context/AuthContext';

const AddHistory = props => {
  const {navigation, route} = props;
  const {data} = route.params;

  const [disease, setDisease] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [history, setHistory] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const {onSignUp} = useContext(AuthAction);

  const handlePressAddHistory = () => {
    const obj = {
      ...data,
      disease: disease,
      height: height,
      weight: weight,
      history: history,
      age: age,
      gender: gender,
    };
    if (data.email !== '' && data.password !== '') {
      onSignUp(obj, navigation);
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
        <Text style={styles.docText}>HISTORY</Text>
        <View>
          <TextInput
            label="Disease"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={disease}
            onChangeText={setDisease}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <TextInput
            label="Age"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={age}
            onChangeText={setAge}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <TextInput
            label="Gender"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={gender}
            onChangeText={setGender}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <TextInput
            label="Height"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={height}
            onChangeText={setHeight}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <TextInput
            label="Weight"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            value={weight}
            onChangeText={setWeight}
            style={{
              margin: 10,
              backgroundColor: '#EFEFEF',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />

          <TextInput
            label="History"
            outlineColor="#0F8F9F"
            activeOutlineColor="#0F8F9F"
            mode="outlined"
            multiline
            numberOfLines={6}
            value={history}
            onChangeText={setHistory}
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
            onPress={handlePressAddHistory}>
            ADD
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
    paddingTop: 20,
  },
});

export default AddHistory;
