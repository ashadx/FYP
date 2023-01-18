import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

import {IconButton} from 'react-native-paper';

const AddMedicines = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.MedName}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.Start}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.End}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.Subtxt}>{props.Time}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor="#EFEFEF"
          size={15}
          onPress={props.func}
          mode="contained"
          containerColor="#0F8F9F"
          style={{marginTop: 16}}
        />
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

export default AddMedicines;
