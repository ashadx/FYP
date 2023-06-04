import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthAction } from '../context/AuthContext';

const SuperUserDashboardRenderItem = ({ item }) => {
    // console.log(item)

    const navigation = useNavigation()

    const { onSignIn } = useContext(AuthAction);

    const onPressUsername = () => {
        console.log('Specific User: ', item)
        onSignIn(item?.email, item?.password, navigation)
    }

    return (
        <View style={styles.mainContainer} >
            <TouchableOpacity onPress={() => onPressUsername()} style={styles.userNamesContainer} >
                <Text style={styles.userNameTextContainer} >{item?.username}</Text>
                <Text style={styles.userNameTextContainer} >{item?.gender}</Text>
                <Text style={styles.userNameTextContainer} >{String(item?.age)}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuperUserDashboardRenderItem;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        paddingVertical: '3%',
    },
    userNamesContainer: {
        backgroundColor: '#F0F0F0',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    userNameTextContainer: {
        fontSize: 20,
        width: '30%',
        color: 'black',
    }
})