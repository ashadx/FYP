import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {TextInput, IconButton, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AddLabs from '../components/AddLabs';
import AddMedicines from '../components/AddMedicine';
import DatePicker from 'react-native-date-picker';

const Prescription = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [date2, setDate2] = useState(new Date());
  const [open2, setOpen2] = useState(false);
  const [time0, setTime0] = useState(new Date());
  const [open0, setOpen0] = useState(false);

  const [medName, setmedName] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [time, setTime] = useState('');

  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    const task = {medName: medName, start: start, end: end, time: time};
    setTaskItem([...taskItem, task]);
    setmedName(null);
    setStart(null);
    setEnd(null);
    setTime(null);
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
            <Text style={styles.txt}></Text>
          </View>
        </View>
        {taskItem.map((item, index) => {
          return (
            <AddMedicines
              key={index}
              MedName={item.medName}
              Start={item.start}
              End={item.end}
              Time={item.time}
            />
          );
        })}
        <AddMedicines
          MedName="Panadol"
          Start="10/01/22"
          End="11/01/22"
          Time="10:00AM"
        />
        <AddMedicines
          MedName="Panadol"
          Start="10/01/22"
          End="11/01/22"
          Time="10:00AM"
        />
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
              onChangeText={text => setmedName(text)}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Start</Text>
            <IconButton
              icon="calendar-edit"
              iconColor="#EFEFEF"
              size={30}
              onPress={() => setOpen(true)}
              mode="contained"
              containerColor="#0F8F9F"
            />
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              textColor="#0F8F9F"
              locale="en"
              androidVariant="nativeAndroid"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                console.log(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              value={start}
              onDateChange={text => setStart(text)}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>End</Text>
            <IconButton
              icon="calendar-edit"
              iconColor="#EFEFEF"
              size={30}
              onPress={() => setOpen2(true)}
              mode="contained"
              containerColor="#0F8F9F"
            />
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              textColor="#0F8F9F"
              locale="en"
              androidVariant="nativeAndroid"
              onConfirm={date => {
                setOpen2(false);
                setDate2(date);
                console.log(date);
              }}
              onCancel={() => {
                setOpen2(false);
              }}
              value={end}
              onDateChange={text => setEnd(text)}
            />
          </View>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.txt}>Time</Text>
            <IconButton
              icon="alarm"
              iconColor="#EFEFEF"
              size={30}
              onPress={() => setOpen0(true)}
              mode="contained"
              containerColor="#0F8F9F"
            />
            <DatePicker
              modal
              open={open}
              date={date}
              mode="time"
              textColor="#0F8F9F"
              locale="en"
              androidVariant="nativeAndroid"
              onConfirm={date => {
                setOpen0(false);
                setDate0(date);
                console.log(date);
              }}
              onCancel={() => {
                setOpen0(false);
              }}
              value={time}
              onDateChange={text => setTime(text)}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={styles.txt}></Text>
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
