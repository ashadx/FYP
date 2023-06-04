import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import SuperUserDashboardRenderItem from '../components/SuperUserDashboardRenderItem';
import LinearGradient from 'react-native-linear-gradient';
import ListHeader from '../components/ListHeader';

const gradientColorArray = [
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#7CCFD9',
    '#0F8F9F',
]

const SuperUserDashboard = () => {

    const [usernames, setUsernames] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

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

    return (
        <LinearGradient
            colors={gradientColorArray}
            style={styles.mainContainer}>

            <View style={styles.screenHeaderMainContainer} >
                <Text style={styles.headerTextContainer} >Super User Dashboard</Text>
            </View>
            <FlatList
                style={{ flex: 1 }}
                data={usernames}
                // renderItem={({ item }) => <SuperUserDashboardRenderItem title={item.title} />}
                renderItem={({ item }) => <SuperUserDashboardRenderItem item={item} />}
                keyExtractor={item => String(item?.uid)}
                ListHeaderComponent={() => <ListHeader />}
            />
        </LinearGradient>
    )
}

export default SuperUserDashboard;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
    screenHeaderMainContainer: {
        backgroundColor: '#7CCFD9',
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },

    headerTextContainer: {
        fontSize: 23,
        color: 'white',
        fontWeight: '600'
    },
})