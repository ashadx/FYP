import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import SuperUserDashboardRenderItem from '../components/SuperUserDashboardRenderItem';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/core';

const SuperUserDashboard = () => {

    const [usernames, setUsernames] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        // console.log('this is superuser dashboard')
        storeUserData()
        fetchUsers()
    }, [])

    const storeUserData = async () => {
        try {
            const jsonValue = JSON.stringify('superuser')
            await EncryptedStorage.setItem('userData', jsonValue)
        } catch (e) {
            console.log('Error : ', e)
        }
    }


    const fetchUsers = async () => {
        try {
            const querySnapshot = await firestore().collection('Users').get(); // Update collection name to 'Users'

            const userNames = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return data;
            });

            setUsernames(userNames);
        } catch (error) {
            console.log('Error fetching users:', error);
        }
    };

    const onPressLogout = () => {
        navigation.navigate("Login")
        EncryptedStorage.clear();
    }

    return (
        <View style={styles.mainContainer} >
            <FlatList
                data={usernames}
                // renderItem={({ item }) => <SuperUserDashboardRenderItem title={item.title} />}
                renderItem={({ item }) => <SuperUserDashboardRenderItem item={item} />}
                keyExtractor={item => String(item?.uid)}
            />
            <TouchableOpacity onPress={() => onPressLogout()} >
                <Text>Logut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuperUserDashboard;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'pink'
    },
    textContainer: {
        color: 'black'
    },
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
})