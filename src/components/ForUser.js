import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { AuthAction } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native'

const ForUser = () => {

    // const { navigation } = props;
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { onSignIn } = useContext(AuthAction);

    const handlePressLogin = () => {
        if (email !== '' && password !== '') {
            onSignIn(email, password, navigation,);
        } else {
            alert('Invalid Email or Password');
        }
    };

    return (
        <View style={{ marginTop: '15%' }} >
            <TextInput
                label="Email"
                outlineColor="#0F8F9F"
                activeOutlineColor="#0F8F9F"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                style={{
                    margin: 10,
                    backgroundColor: '#EFEFEF',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            />
            <TextInput
                label="Password"
                outlineColor="#0F8F9F"
                activeOutlineColor="#0F8F9F"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                right={<TextInput.Icon icon="eye" />}
                style={{
                    margin: 10,
                    backgroundColor: '#EFEFEF',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            />
            <View style={{ alignItems: 'flex-end', paddingEnd: 5, marginBottom: 30 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>
                    Forget Password?{' '}
                </Text>
            </View>
            <View style={{ margin: 10 }}>
                <Button
                    buttonColor="#0F8F9F"
                    icon="send"
                    mode="contained"
                    onPress={() => handlePressLogin()}>
                    SIGN IN
                </Button>
            </View>
        </View>
    )
}

export default ForUser;

const styles = StyleSheet.create({
    cont: {
        height: '100%',
        padding: 20,
    },
    Logo: {
        alignItems: 'flex-end',
    },
    doc: {
        alignItems: 'center',
        marginBottom: -200,
    },
    docText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0F8F9F',
        fontSize: 30,
        textAlign: 'left',
        padding: 20,
        paddingTop: 100,
    },
});
