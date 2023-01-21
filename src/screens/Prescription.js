import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';

import {TextInput, IconButton, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AddMedicines from '../components/AddMedicine';
import DateTimePicker from '../components/DatePicker';
import {GeneralUtil} from '../context/util';
import {AddLabsAction, AddLabsContext} from '../context/AddLabsContext';

const Prescription = () => {
  const {prescriptions} = useContext(AddLabsContext);
  const {addPrescriptions, deletePrescriptions} = useContext(AddLabsAction);

  const [medName, setMedName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = () => {
    const task = {medName: medName, start: startDate, end: endDate, time: time};
    addPrescriptions(task);
    setMedName(null);
    setStartDate(null);
    setEndDate(null);
    setTime(null);
  };

  const handleStartDate = datetime => {
    const formatted = GeneralUtil.datetimeFormatter(datetime, 'date');
    setStartDate(formatted);
  };

  const handleEndDate = datetime => {
    const formatted = GeneralUtil.datetimeFormatter(datetime, 'date');
    setEndDate(formatted);
  };

  const handleTime = datetime => {
    const formatted = GeneralUtil.datetimeFormatter(datetime, 'time');
    setTime(formatted);
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
            source={require('../assets/img/logo.png')}
          />
        </View>
        <Text style={styles.docText}>Prescription</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Medicine</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Start</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>End</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Time</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt} />
          </View>
        </View>
        {prescriptions.length > 0 &&
          prescriptions.map((item, index) => {
            return (
              <AddMedicines
                key={index}
                MedName={item.medName}
                Start={item.start}
                End={item.end}
                Time={item.time}
                func={() => deletePrescriptions(item.id)}
              />
            );
          })}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'relative',
            marginTop: '40%',
          }}>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Medicine</Text>
            <TextInput
              outlineColor="#0F8F9F"
              activeOutlineColor="#0F8F9F"
              mode="outlined"
              style={styles.txtinp}
              value={medName}
              onChangeText={text => setMedName(text)}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Start</Text>
            <DateTimePicker onChange={handleStartDate} />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>End</Text>
            <DateTimePicker onChange={handleEndDate} />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Time</Text>
            <DateTimePicker icon="alarm" onChange={handleTime} mode="time" />
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
  txtinp: {
    backgroundColor: '#EFEFEF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 60,
    marginBottom: 10,
  },
});

export default Prescription;
