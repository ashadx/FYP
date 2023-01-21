import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useContext} from 'react';
import {Button} from 'react-native-paper';
import {AuthAction, AuthContext} from '../context/AuthContext';

const Profile = ({navigation}) => {
  const {onSignOut} = useContext(AuthAction);
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
        <Text style={styles.docText}>PROFILE</Text>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Username:</Text>
          <Text style={styles.ConT}>{user.username}</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Email:</Text>
          <Text style={styles.ConT}>{user.email}</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Gender:</Text>
          <Text style={styles.ConT}>{user.gender}</Text>
        </View>
        <View style={styles.SubCon}>
          <Text style={styles.ConH}>Age:</Text>
          <Text style={styles.ConT}>{user.age}</Text>
        </View>
        <View style={{marginLeft: 20, marginTop: '20%'}}>
          <Button
            buttonColor="#0F8F9F"
            icon="account-arrow-left"
            mode="contained"
            onPress={() => onSignOut(navigation)}>
            LOGOUT
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

export default Profile;
