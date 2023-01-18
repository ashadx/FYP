import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useContext} from 'react';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AuthAction} from '../context/AuthContext';

const Template = props => {
  const navigation = useNavigation();
  const {onSetTemplate} = useContext(AuthAction);

  const handlePressHeart = () => {
    onSetTemplate('Heart', navigation);
  };
  const handlePressDiabetes = () => {
    onSetTemplate('Diabetes', navigation);
  };
  const handlePressKidney = () => {
    onSetTemplate('Kidney', navigation);
  };
  const handlePressCustom = () => {
    onSetTemplate('Custom', navigation);
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
      <Text style={styles.docText}>SELECT TEMPLATE</Text>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flex: 0, flexDirection: 'row'}}>
          <FAB
            icon="heart-pulse"
            style={styles.fab}
            label="Heart"
            onPress={handlePressHeart}
            size="large"
            color="#0F8F9F"
          />
          <FAB
            icon="stethoscope"
            style={styles.fab}
            label="Kidney"
            onPress={handlePressKidney}
            size="large"
            color="#0F8F9F"
          />
        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
          <FAB
            icon="hospital-building"
            style={styles.fab}
            label="Diabetes"
            size="large"
            color="#0F8F9F"
            onPress={handlePressDiabetes}
          />
          <FAB
            icon="plus"
            style={styles.fab}
            label="Custome"
            size="large"
            color="#0F8F9F"
            onPress={handlePressCustom}
          />
        </View>
      </View>
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
    marginBottom: 30,
  },

  fab: {
    position: 'relative',
    margin: 15,
    right: 0,
    bottom: 0,
    color: '#0F8F9F',
    width: 130,
    paddingBottom: 30,
    paddingTop: 30,
  },
});

export default Template;
