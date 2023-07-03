import React, { useEffect, useState, useContext } from 'react';
import { View, Text, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import rnHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import { AuthContext } from '../context/AuthContext';
import { AddLabsAction, AddLabsContext } from '../context/AddLabsContext';
import RNFS from 'react-native-fs';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Prescription from './Prescription';
import { GeneralUtil } from '../context/util';
import logo from '../assets/img/logo.png'




const PdfScreen = () => {
    const [pdfPath, setPdfPath] = useState('');
    const [data, setData] = useState([]);
    const [isDownloading, setIsDownloading] = useState(false);

    const { user } = useContext(AuthContext);
    const { prescriptions } = useContext(AddLabsContext)
    const { report } = useContext(AddLabsContext);
    const [dates, setDates] = useState('');
    const [reports, setReports] = useState('');


    useEffect(() => {
        if (report?.length > 0) {
            const date = report?.map(data => {
                return GeneralUtil.datetimeFormatter(data.createdAt?.toDate(), 'date');
            });
            setDates(date);

            const headings = Object.keys(report[0]).filter(
                data => data !== 'createdAt' && data !== 'id',
            );

            let repo = headings.map(data => {
                const title = data;
                const dataSet = report.map(data => Number(data[title] || 0)) || [];
                return {
                    title: title,
                    dataSet: dataSet,
                };
            });
            setReports(repo);
        }
    }, [report]);



    console.log('dates => ', dates);
    console.log('report => ', reports);




    useEffect(() => {
        if (dates.length > 0 && reports.length > 0) {
            setTimeout(() => {
                generatePdf();
                console.log('Pdf Generated')
                console.log('dates => ', dates);
                console.log('reports => ', reports);
            }, 3000);
        }
    }, [dates, reports]);



    const generatePdf = async (callback) => {
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
            <!DOCTYPE html>
        <html>
        <head>
        <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
    }

    th, td, tr {
      border: 2px solid #0F8F9F;
      text-align: center;
      padding: 12px;
    }

    th {
      background-color: #E0FFFF;
      color: #000;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #B0E0E6;
    }

    tr:hover {
      background-color: #AFEEEE;
    }

    td:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    td:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    td {
      border-bottom: 1px solid #BBFFFF;
    }

    .logo-container {
      text-align: center;
      margin-bottom: 20px;
    }

    .logo {
      width: 100px; /* Adjust the width as needed */
      height: auto;
    }

    .section {
      margin-bottom: 20px;
    }

    .section-heading {
      font-size: 20px;
      font-weight: bold;
      color: #0F8F9F;
      margin-top: 0;
      margin-bottom: 10px;
    }

    .section-paragraph {
      font-size: 14px;
      color: #333;
      margin-top: 10px;
    }
  </style>
        </head>
        <body>
        <div class="logo-container">
        <img src="${logo}" class="logo">
        </div>
        
        <div class="section">
        <h2 class="section-heading">${user?.username} Details:</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            <tr>
                <td>${user?.username}</td>
                <td>${user?.age}</td>
                <td>${user?.gender}</td>
            </tr>
            <tr>
                <th>Weight</th>
                <th>Height</th>
                <th>Disease</th>
            </tr>
            <tr>
                <td>${user?.weight}</td>
                <td>${user?.height}</td>
                <td>${user?.disease}</td>
            </tr>
            <tr>
                <th colspan="3" class="full-width">Email</th>
            </tr>
            <tr>
                <td colspan="3" class="full-width">${user?.email}</td>
            </tr>
            <!-- Add more rows as needed -->
        </table>
        </div>
        
        <div class="section">
        <h2 class="section-heading">History:</h2>
        <p class="section-paragraph">${user?.history}</p>
        </div>
        
        <div class="section">
        <h2 class="section-heading">Prescriptions:</h2>
        <table>
            <tr>
                <th>Medicine Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Time</th>
            </tr>
            ${prescriptions.map(item => `
                <tr>
                    <td>${item.medName}</td>
                    <td>${item.start}</td>
                    <td>${item.end}</td>
                    <td>${item.time}</td>
                </tr>
            `)}
        </table>
        </div>
        <div class="section">
        <h2 class="section-heading">Reports:</h2>
        ${reports.length > 0 && reports.map(item => `
            <div>
                <h3>${item.title}</h3>
                <table>
                    <tr>
                    <th>Result</th>
                    ${item.dataSet.map(data => `
                        <td>${data}</td>
                    `).join('')}
                    </tr>
                    <tr>
                    <th>Dates</th>
                    ${dates.map(date => `
                        <td>${date}</td>
                    `).join('')}
                    </tr>
                </table>
            </div>
        `).join('')}
        
        </div>
        </body>
        </html>     
        `;

            console.log('dates 1=> ', dates);
            console.log('report 1=> ', reports);


            const options = {
                html: htmlContent,
                fileName: 'hello_world',
                directory: 'Documents',
            };

            const pdf = await rnHTMLtoPDF.convert(options);
            console.log('PDF generated:', pdf.filePath);
            setPdfPath(pdf.filePath);
            if (callback) {
                callback();
            }
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

            const ocrDir = `${RNFS.DownloadDirectoryPath}/OCR`;
            if (!(await RNFS.exists(ocrDir))) {
                await RNFS.mkdir(ocrDir);
            }

            const destinationPath = `${ocrDir}/${user?.username}'s Record.pdf`;

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
                    <Pdf source={{ uri: `file://${pdfPath}` }} style={{ flex: 1, backgroundColor: 'black' }} />
                    <TouchableOpacity onPress={handleDownload} disabled={isDownloading}>
                        <Text style={{ alignSelf: 'center', marginVertical: 10, color: 'black' }}>
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
