import React, { useEffect, useState, useContext } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import rnHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import { AuthContext } from '../context/AuthContext';
import firestore from '@react-native-firebase/firestore';

const PdfScreen = () => {
    const [pdfPath, setPdfPath] = useState('');
    const [data, setData] = useState([])

    const { user } = useContext(AuthContext);

    // console.log('user: ', user)

    useEffect(() => {
        fetchUsers()
        generatePdf();
    }, []);

    const fetchUsers = async () => {
        try {
            const documentSnapshot = await firestore().collection('Users').doc(user?.uid).get();

            if (documentSnapshot.exists) {
                const userData = documentSnapshot.data();
                setData(userData);
                console.log('userData: ', userData)
            } else {
                console.log('User not found');
            }
        } catch (error) {
            console.log('Error fetching user:', error);
        }
    };


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

            console.log('data: ', data)

            const htmlContent = `
            <h1>Username</h1>
            <p>${data?.username}</p>
            <!-- Add more HTML content here -->
          `;

            const options = {
                html: htmlContent,
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
