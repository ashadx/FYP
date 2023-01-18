import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Button} from 'react-native-paper';

const Welcome = props => {
  const {navigation} = props;
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#0F8F9F', '#0F8F9F', '#7CCFD9', '#ffffff']}
      style={styles.cont}>
      <View style={styles.Logo}>
        <Image
          style={{height: 80, width: 80}}
          source={require('/Users/Asad Aslam/Desktop/React Native/NewProject/src/assets/img/logo1.png')}
        />
      </View>
      <Text style={styles.docText}>Welcome To Your Health Care Partner</Text>
      <View style={styles.doc}>
        <Image
          style={{height: '70%', width: '70%'}}
          source={require('/Users/Asad Aslam/Desktop/React Native/NewProject/src/assets/img/doc.png')}
        />
      </View>
      <Button
        buttonColor="#0F8F9F"
        icon="send"
        mode="contained"
        onPress={handlePress}>
        SIGN IN
      </Button>
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
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
  },
});

export default Welcome;
