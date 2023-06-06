import React, { useEffect, useState, useContext } from 'react';
import { View, Text, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import rnHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import { AuthContext } from '../context/AuthContext';
import RNFS from 'react-native-fs';

const PdfScreen = () => {
    const [pdfPath, setPdfPath] = useState('');
    const [data, setData] = useState([]);
    const [isDownloading, setIsDownloading] = useState(false);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            generatePdf();
        }, 2000);
    }, []);

    const generatePdf = async () => {
        try {
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

            const htmlContent = `
        <h1>Username</h1>
        <p style="font-size: 28px">${user?.username}</p>
        <h1>Age</h1>
        <p style="font-size: 28px">${user?.age}</p>
        <h1>Gender</h1>
        <p style="font-size: 28px">${user?.gender}</p>
        <h1>Weight</h1>
        <p style="font-size: 28px">${user?.weight}</p>
        <h1>Disease</h1>
        <p style="font-size: 28px">${user?.template}</p>
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

    const handleDownload = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'App needs access to your storage to download the PDF',
                        buttonPositive: 'OK',
                    }
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Storage permission denied');
                    return;
                }
            }

            const ocrDir = `${RNFS.DocumentDirectoryPath}/OCR`;
            if (!(await RNFS.exists(ocrDir))) {
                await RNFS.mkdir(ocrDir);
            }

            const destinationPath = `${ocrDir}/${user?.username}'s Record`;

            setIsDownloading(true);

            await RNFS.copyFile(pdfPath, destinationPath);

            setIsDownloading(false);

            console.log('PDF downloaded successfully:', destinationPath);
        } catch (error) {
            setIsDownloading(false);
            console.log('Error downloading PDF:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {pdfPath ? (
                <View style={{ flex: 1 }}>
                    <Pdf source={{ uri: `file://${pdfPath}` }} style={{ flex: 1 }} />
                    <TouchableOpacity onPress={handleDownload} disabled={isDownloading}>
                        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>
                            {isDownloading ? 'Downloading...' : 'Download PDF'}
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <Text>Generating PDF...</Text>
            )}
        </View>
    );
};

export default PdfScreen;
