import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage';

const SuperUserDashboard = () => {

    useEffect(() => {
        storeUserData()
    }, [])

    const storeUserData = async (value) => {
        try {
            const jsonValue = JSON.stringify('superUser')
            await EncryptedStorage.setItem('userData', jsonValue)
        } catch (e) {
            console.log('Error : ', e)
        }
    }

    return (
        <View style={styles.mainContainer} >
            <Text style={styles.textContainer} >Super User Dashboard</Text>
        </View>
    )
}

export default SuperUserDashboard;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    textContainer: {
        color: 'black'
    }
})