import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {TextInput, IconButton, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AddLabs from '../components/AddLabs';
import {AddLabsAction, AddLabsContext} from '../context/AddLabsContext';
import OCR from '../components/OCR';

const Custom = () => {
  const {custom} = useContext(AddLabsContext);
  const {addCustomWidget, addCustomLab} = useContext(AddLabsAction);
  const [testName, setTestName] = useState('');
  const [lr, setLr] = useState('');
  const [hr, setHr] = useState('');
  const [unit, setUnit] = useState('');
  const [customLab, setCustomLab] = useState([]);
  const [text, setText] = useState('');

  const handleAddTask = () => {
    const task = {testName: testName, lr: lr, hr: hr, unit: unit};
    addCustomWidget(task);
    setTestName(null);
    setLr(null);
    setHr(null);
    setUnit(null);
  };

  const handleReport = () => {
    let report = {};
    custom.forEach(data => {
      const name = data.testName.toString();
      report[name] = data.result;
    });
    addCustomLab(report);
    custom.forEach(data => {
      data.result = '';
    });
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
      <View style={styles.Logo}>
        <Image
          style={{height: 80, width: 80}}
          source={require('../assets/img/logo.png')}
        />
      </View>
      <ScrollView>
        <Text style={styles.docText}>Custom</Text>
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
        {custom.length > 0 &&
          custom.map((item, index) => {
            return (
              <AddLabs
                key={index}
                testName={item.testName}
                lr={item.lr}
                hr={item.hr}
                unit={item.unit}
                setResult={text => {
                  item.result = text;
                }}
              />
            );
          })}
        {/* <AddLabs testName="Abc" lr="0" hr="200" unit="mol" /> */}
        {/* <AddLabs testName="Abc" lr="0" hr="200" unit="mol" /> */}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'relative',
            marginTop: '40%',
          }}>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Test Name</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={testName}
              onChangeText={text => setTestName(text)}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>LR</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              onChangeText={text => setLr(text)}
              value={lr}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>HR</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              onChangeText={text => setHr(text)}
              value={hr}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Unit</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              onChangeText={text => setUnit(text)}
              value={unit}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={styles.txt} />
            <IconButton
              icon="arrow-right-bold"
              iconColor="#EFEFEF"
              size={30}
              onPress={() => handleAddTask()}
              mode="contained"
              containerColor="#0F8F9F"
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <Button
            buttonColor="#0F8F9F"
            icon="database-export-outline"
            mode="contained"
            onPress={handleReport}>
            SAVE
          </Button>
        </View>
        <OCR handleText={setText} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
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
  txtinp: {
    backgroundColor: '#EFEFEF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 60,
    marginBottom: 10,
  },
});

export default Custom;
