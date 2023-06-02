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
            </TouchableOpacity>
        </View>
    )
}

export default SuperUserDashboardRenderItem;

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        paddingVertical: '2%'
    },
    userNamesContainer: {
        backgroundColor: 'green',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userNameTextContainer: {
        fontSize: 23
    }
})