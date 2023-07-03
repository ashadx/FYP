import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AddLabs from '../components/AddLabs';
import { AddLabsAction } from '../context/AddLabsContext';
import OCR from '../components/OCR';

const Heart = () => {
  const { addHeartLab } = useContext(AddLabsAction);

  const [CPKMB, setCPKMB] = useState('');
  const [troponin, setTroponin] = useState('');
  const [CRP, setCRP] = useState('');
  const [text, setText] = useState('');

  const handleReport = () => {
    const report = {
      CPKMB: CPKMB,
      Troponin: troponin,
      CRP: CRP,
    };

    addHeartLab(report);

    setCPKMB('');
    setTroponin('');
    setCRP('');
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
        if (tests[i]['TestName'].toLowerCase() == 'cpk-mb') {
          setCPKMB(tests[i]['Result'])
        }
        else if (tests[i]['TestName'].toLowerCase() == 'troponin') {
          setTroponin(tests[i]['Result'])
        }
        else if (tests[i]['TestName'].toLowerCase() == 'crp') {
          setCRP(tests[i]['Result'])
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
        <Text style={styles.docText}>HEART</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>Test Name</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>LR</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>Result</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>HR</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.txt}>Unit</Text>
          </View>
        </View>
        <AddLabs
          testName="CPK-MB"
          lr="5"
          hr="25"
          unit="IU/L"
          setResult={setCPKMB}
          result={CPKMB}
        />
        <AddLabs
          testName="Troponin"
          lr="0"
          hr="0.01"
          unit="ng/mL"
          setResult={setTroponin}
          result={troponin}
        />
        <AddLabs
          testName="CRP"
          lr="0"
          hr="2.9"
          unit="mg"
          setResult={setCRP}
          result={CRP}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 40,
            marginBottom: 20,
            marginLeft: 16,
            marginRight: 16,
          }}>

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
});

export default Heart;
