import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import rnHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';

const PdfScreen = () => {
    const [pdfPath, setPdfPath] = useState('');

    useEffect(() => {
        generatePdf();
    }, []);

    const generatePdf = async () => {
        try {
            // Request external storage permission for Android
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'App needs access to your storage to generate PDF',
                        buttonPositive: 'OK',
                    }
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Storage permission denied');
                    return;
                }
            }

            const options = {
                html: '<h1>Hello Zaid Bhai</h1>',
                fileName: 'hello_world',
                directory: 'Documents',
            };

            const pdf = await rnHTMLtoPDF.convert(options);
            console.log('PDF generated:', pdf.filePath);
            setPdfPath(pdf.filePath);
        } catch (error) {
            console.log('Error generating PDF:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {pdfPath ? (
                <Pdf source={{ uri: `file://${pdfPath}` }} style={{ flex: 1 }} />
            ) : (
                <Text>Generating PDF...</Text>
            )}
        </View>
    );
};

export default PdfScreen;
