import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useContext} from 'react';
import {Button} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

const History = () => {
  const {user} = useContext(AuthContext);
  return (
    <LinearGradient
      colors={['#0F8F9F', '#0F8F9F', '#0F8F9F', '#7CCFD9', '#ffffff']}
      style={styles.cont}>
      <View style={styles.Logo}>
        <Image
          style={{height: 80, width: 80}}
          source={require('../assets/img/logo1.png')}
        />
      </View>
      <ScrollView>
        <Text style={styles.docText}>HISTORY</Text>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Disease:</Text>
          <Text style={styles.ConT}>{user.disease}</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Height:</Text>
          <Text style={styles.ConT}>{user.height} ft</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Weight:</Text>
          <Text style={styles.ConT}>{user.weight} kg</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Age:</Text>
          <Text style={styles.ConT}>{user.age}</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>History:</Text>
          <Text style={styles.ConT}>{user.history}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', margin: 20}}>
          <View style={{flex: 0, flexDirection: 'column', marginRight: 20}}>
            <Button
              textColor="#0F8F9F"
              buttonColor="white"
              icon="arrow-down-bold-circle-outline"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Export History
            </Button>
          </View>
          <View style={{flex: 0, flexDirection: 'column', marginLeft: 20}}>
            <Button
              buttonColor="#0F8F9F"
              icon="update"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Update
            </Button>
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
  docText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
    marginTop: 30,
    marginBottom: 6,
  },

  SubCon: {
    marginBottom: 20,
  },
  ConH: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 20,
    fontSize: 15,
  },
  ConT: {
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 15,
  },
});

export default History;
