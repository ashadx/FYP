import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { AddLabsAction } from '../context/AddLabsContext';
import OCR from '../components/OCR';

const Diabetes = () => {
  const { addDiabetesLab } = useContext(AddLabsAction);

  const [A1C, setA1C] = useState('');
  const [FPG, setFPG] = useState('');
  const [GT, setGT] = useState('');
  const [RPG, setRPG] = useState('');
  const [text, setText] = useState('');

  const handleReport = () => {
    const report = {
      A1C: A1C,
      FPG: FPG,
      GT: GT,
      RPG: RPG,
    };

    addDiabetesLab(report);

    setA1C('');
    setFPG('');
    setGT('');
    setRPG('');
  };

  useEffect(() => {
    if (text !== '') {
      const linesArray = text.split('\n');

      const testName = [];
      const result = [];

      let count = 0

      for (let i = 0; i < linesArray.length; i++) {
        const line = linesArray[i];
        if (!line.match(/Test/)) {
          if (line.match(/Result/)) {
            count++
            break
          }
          else {
            testName.push(line)
            count++;
          }
        }
      }
      for (let i = count; i < linesArray.length; i++) {
        const line = linesArray[i];
        if (!line.match(/Test/) && !line.match(/Result/)) {
          if (line.match(/Unit/) || line.match(/Range/)) {
            count++
            break
          }
          else {
            result.push(line)
            count++
          }
        }
      }

      const resultNew = []
      for (let i = 0; i < result.length; i++) {
        RA = result[i].split(" ")
        resultNew.push(RA[0])
      }

      const tests = [];

      for (let i = 0; i < testName.length; i++) {
        const TestName = testName[i];
        const Result = resultNew[i];

        const test = {
          TestName,
          Result,
        };

        tests.push(test);

      }

      for (let i = 0; i < tests.length; i++) {
        if (tests[i]['TestName'].toLowerCase() == 'a1c') {
          setA1C(tests[i]['Result'])
        }
        else if (tests[i]['TestName'].toLowerCase() == 'fpg') {
          setFPG(tests[i]['Result'])
        }
        else if (tests[i]['TestName'].toLowerCase() == 'gt') {
          setGT(tests[i]['Result'])
        }
        else if (tests[i]['TestName'].toLowerCase() == 'rpg') {
          setRPG(tests[i]['Result'])
        }
      }
    }
  }, [text]);


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
            style={{ height: 80, width: 80 }}
            source={require('../assets/img/logo.png')}
          />
        </View>
        <Text style={styles.docText}>DIABETES</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>Test Name</Text>
            <Text style={styles.Subtxt}>A1C Test</Text>
            <Text style={styles.Subtxt}>FPG Test</Text>
            <Text style={styles.Subtxt}>GT Test</Text>
            <Text style={styles.Subtxt}>RPG Test</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>LR</Text>
            <Text style={styles.Subtxt}>0</Text>
            <Text style={styles.Subtxt}>0</Text>
            <Text style={styles.Subtxt}>0</Text>
            <Text style={styles.Subtxt}>0</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>Result</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={A1C}
              onChangeText={setA1C}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={FPG}
              onChangeText={setFPG}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={GT}
              onChangeText={setGT}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={RPG}
              onChangeText={setRPG}
            />
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>HR</Text>
            <Text style={styles.Subtxt}>5.7</Text>
            <Text style={styles.Subtxt}>99</Text>
            <Text style={styles.Subtxt}>139</Text>
            <Text style={styles.Subtxt}>200</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>Unit</Text>
            <Text style={styles.Subtxt}>%</Text>
            <Text style={styles.Subtxt}>mg/dL</Text>
            <Text style={styles.Subtxt}>mg/dL</Text>
            <Text style={styles.Subtxt}>mg/dL</Text>
          </View>
        </View>
        <View style={{ margin: 10 }}>
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
  Subtxt: {
    color: '#0F8F9F',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 23,
    marginTop: 25,
  },
  txtinp: {
    backgroundColor: '#EFEFEF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 60,
    marginBottom: 10,
  },
});

export default Diabetes;
