import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import TextRecognition from 'react-native-text-recognition';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AddLabs from '../components/AddLabs';

const Heart = () => {
  const [image, setImage] = useState('');

  const handleAddLaunch = () => {
    launchImageLibrary({}, setImage);
  };
  const handleAddImage = async () => {
    if (image) {
      const result = await TextRecognition.recognize(image.assets[0].uri);
      console.log(result);
    }
  };

  return (
    <LinearGradient
      colors={[
        '#ffffff',
        '#ffffff',
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
        <Text style={styles.docText}>DIABETES</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Test Name</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>LR</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Result</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>HR</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Unit</Text>
          </View>
        </View>
        <AddLabs testName="CPK-MB" lr="5" hr="25" unit="IU/L" />
        <AddLabs testName="Troponin" lr="0" hr="0.01" unit="ng/mL" />
        <AddLabs testName="CRP" lr="0" hr="2.9" unit="mg" />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 40,
            marginBottom: 20,
            marginLeft: 16,
            marginRight: 16,
          }}>
          <View style={{flex: 0, flexDirection: 'column', marginRight: 30}}>
            <Button
              labelStyle={{fontSize: 11}}
              buttonColor="#0F8F9F"
              icon="file-import-outline"
              mode="contained"
              onPress={() => handleAddLaunch()}>
              Import Image
            </Button>
          </View>
          <View style={{flex: 0, flexDirection: 'column', marginLeft: 25}}>
            <Button
              labelStyle={{fontSize: 11}}
              buttonColor="#0F8F9F"
              icon="file-image"
              mode="contained"
              onPress={() => handleAddImage()}>
              Fill Results
            </Button>
          </View>
        </View>
        <View style={{margin: 10}}>
          <Button
            buttonColor="#0F8F9F"
            icon="database-export-outline"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            SAVE
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
  txt: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Heart;
