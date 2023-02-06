import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {AddLabsAction} from '../context/AddLabsContext';
import OCR from '../components/OCR';

const Kidney = () => {
  const {addKidneyLab} = useContext(AddLabsAction);

  const [BloodUrea, setBloodUrea] = useState('');
  const [Creatinine, setCreatinine] = useState('');
  const [UricAcid, setUricAcid] = useState('');
  const [Sodium, setSodium] = useState('');
  const [Potassium, setPotassium] = useState('');
  const [Chloride, setChloride] = useState('');
  const [TotalProtien, setTotalProtien] = useState('');
  const [text, setText] = useState('');

  const handleReport = () => {
    const report = {
      BloodUrea: BloodUrea,
      Creatinine: Creatinine,
      UricAcid: UricAcid,
      Sodium: Sodium,
      Potassium: Potassium,
      Chloride: Chloride,
      TotalProtien: TotalProtien,
    };

    addKidneyLab(report);

    setBloodUrea('');
    setCreatinine('');
    setUricAcid('');
    setSodium('');
    setPotassium('');
    setChloride('');
    setTotalProtien('');
  };

  useEffect(() => {
    if (text !== '') {
      const BloodUrea_postion =
        text.toLowerCase().indexOf(' = ') + (' = '.length - 1);
      setBloodUrea(text.slice(BloodUrea_postion, BloodUrea_postion + 4));
      console.log('text => ', text.toLowerCase().search('total protein = '));

      const Creatinine_postion =
        text.toLowerCase().search('creatinine = ') +
        ('creatinine = '.length - 1);
      setCreatinine(text.slice(Creatinine_postion, Creatinine_postion + 4));

      const UricAcid_postion =
        text.toLowerCase().search('acid = ') + ('acid = '.length - 1);
      setUricAcid(text.slice(UricAcid_postion, UricAcid_postion + 4));

      const Sodium_postion =
        text.toLowerCase().search('sodium = ') + ('sodium = '.length - 1);
      setSodium(text.slice(Sodium_postion, Sodium_postion + 4));

      const Potassium_postion =
        text.toLowerCase().search('potassium = ') + ('potassium = '.length - 1);
      setPotassium(text.slice(Potassium_postion, Potassium_postion + 4));

      const Chloride_postion =
        text.toLowerCase().search('chloride = ') + ('chloride = '.length - 1);
      setChloride(text.slice(Chloride_postion, Chloride_postion + 4));

      const TotalProtien_postion =
        text.toLowerCase().search('protein = ') + ('protein = '.length - 1);
      setTotalProtien(
        text.slice(TotalProtien_postion, TotalProtien_postion + 4),
      );
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
            style={{height: 80, width: 80}}
            source={require('../assets/img/logo.png')}
          />
        </View>
        <Text style={styles.docText}>DIABETES</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Test Name</Text>
            <Text style={styles.Subtxt}>Blood Urea</Text>
            <Text style={styles.Subtxt}>Creatinine</Text>
            <Text style={styles.Subtxt}>Uric Acid</Text>
            <Text style={styles.Subtxt}>Sodium</Text>
            <Text style={styles.Subtxt}>Potassium</Text>
            <Text style={styles.Subtxt}>Chloride</Text>
            <Text style={styles.Subtxt}>Total Protein</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>LR</Text>
            <Text style={styles.Subtxt}>10</Text>
            <Text style={styles.Subtxt}>0.6</Text>
            <Text style={styles.Subtxt}>2.4</Text>
            <Text style={styles.Subtxt}>135</Text>
            <Text style={styles.Subtxt}>3.5</Text>
            <Text style={styles.Subtxt}>98</Text>
            <Text style={styles.Subtxt}>6</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Result</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={BloodUrea}
              onChangeText={setBloodUrea}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={Creatinine}
              onChangeText={setCreatinine}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={UricAcid}
              onChangeText={setUricAcid}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={Sodium}
              onChangeText={setSodium}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={Potassium}
              onChangeText={setPotassium}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={Chloride}
              onChangeText={setChloride}
            />
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={TotalProtien}
              onChangeText={setTotalProtien}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>HR</Text>
            <Text style={styles.Subtxt}>50</Text>
            <Text style={styles.Subtxt}>1.3</Text>
            <Text style={styles.Subtxt}>7.0</Text>
            <Text style={styles.Subtxt}>145</Text>
            <Text style={styles.Subtxt}>5.1</Text>
            <Text style={styles.Subtxt}>106</Text>
            <Text style={styles.Subtxt}>8.3</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Unit</Text>
            <Text style={styles.Subtxt}>mg/dL</Text>
            <Text style={styles.Subtxt}>mg/dL</Text>
            <Text style={styles.Subtxt}>mg/dL</Text>
            <Text style={styles.Subtxt}>mmol/L</Text>
            <Text style={styles.Subtxt}>mmol/L</Text>
            <Text style={styles.Subtxt}>mmol/L</Text>
            <Text style={styles.Subtxt}>g/dL</Text>
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

export default Kidney;
