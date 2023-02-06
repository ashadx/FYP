import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

import {TextInput, IconButton} from 'react-native-paper';

const AddLabs = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.testName}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.lr}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <TextInput
          outlineColor="#0F8F9F"
          activeOutlineColor="#0F8F9F"
          mode="outlined"
          style={styles.txtinp}
          value={props.result}
          onChangeText={props.setResult}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.hr}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AddLabs;
