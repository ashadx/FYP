import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
// import TextRecognition from 'react-native-text-recognition';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import {firebase} from '@react-native-firebase/ml';
import txtRecognize from '@react-native-ml-kit/text-recognition';
// import MlkitOcr from 'react-native-mlkit-ocr';

const OCR = ({ handleText }) => {
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  const handleAddLaunch = () => {
    launchCamera({}, setImage);
  };

  const handleAddImage = async () => {
    if (image) {
      const processingResult = await txtRecognize.recognize(
        image.assets[0].uri,
      );
      console.log('processingResult text => ', processingResult.text);
      console.log('processingResult blocks => ', processingResult.blocks);
      setText(processingResult.text);
      if (handleText) {
        handleText(processingResult.text);
      }
      //   firebase
      //     .ml()
      //     .cloudDocumentTextRecognizerProcessImage(image.assets[0].uri);
      //   console.log(result);
      //   const result = await TextRecognition.recognize(image.assets[0].uri);
      //   console.log('TextRecognition => ', result);
    }
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <TextInput mode="outlined" value={text} multiline={true} />
      <Text
        style={{
          color: '#ffffff',
          backgroundColor: '#0F8F9F',
          fontSize: 16,
          padding: 10,
          marginBottom: 10,
        }}>
        Note: Upload image containing same name given above in Lab Screen with
        result only to generate most accurate result. (i.e. Test Name = Result)
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={{ flex: 0, flexDirection: 'column', marginRight: 30 }}>
          <Button
            labelStyle={{ fontSize: 11 }}
            buttonColor="#0F8F9F"
            icon="file-import-outline"
            mode="contained"
            onPress={() => handleAddLaunch()}>
            Capture Image
          </Button>
        </View>
        <View style={{ flex: 0, flexDirection: 'column', marginLeft: 25 }}>
          <Button
            labelStyle={{ fontSize: 11 }}
            buttonColor="#0F8F9F"
            icon="file-image"
            mode="contained"
            onPress={() => handleAddImage()}>
            Fill Results
          </Button>
        </View>
      </View>
    </View>
  );
};

export default OCR;
