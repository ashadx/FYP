import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListHeader = () => {
    return (
        <View style={styles.mainContainer} >
            <Text style={styles.headerTextContainer} >Username</Text>
            <Text style={styles.headerTextContainer} >Gender</Text>
            <Text style={styles.headerTextContainer} >Age</Text>
        </View>
    )
}

export default ListHeader;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#7CCFD9',
        width: '100%',
        height: '7%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: '5%'
    },
    headerTextContainer: {
        color: 'white',
        fontSize: 23,
        width: '30%',
        fontWeight: '600'
    }
})