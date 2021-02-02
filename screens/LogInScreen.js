import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, StyleSheet, Text, Image, Alert, TouchableOpacity } from 'react-native'
import { Button, TextInput, DefaultTheme } from 'react-native-paper';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import { Spinner } from '../components/Spinner';
import { Theme } from '../components/Theme';
import * as WebBrowser from 'expo-web-browser';

export const LogInScreen = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const unmounted = useRef(false);
    const { onLogin } = useContext(AuthContext);
    const data = useContext(UserContext);
    console.log(data);

    const Login = async () => {
        setLoading(true)
        await onLogin(username, password)
        setLoading(false)
    }

    const onOpenRegister = async () => {
        const result = await WebBrowser.openBrowserAsync('http://it2.sut.ac.th/project63_g40/register');
      };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./../assets/logo-pure.png')} />
            <Image style={styles.welcome} source={require('./../assets/welcome.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    label={'ชื่อผู้ใช้'}
                    keyboardType='email-address'
                    onChangeText={(value) => setUsername(value)}
                    selectionColor={Theme.colors.primary}
                    underlineColor="transparent"
                    autoCapitalize="none"
                    mode="outlined"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    label={'รหัสผ่าน'}
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry
                    selectionColor={Theme.colors.primary}
                    underlineColor="transparent"
                    autoCapitalize="none"
                    mode="outlined"
                />
            </View>

            <Button style={styles.button} mode="contained" onPress={() => Login()}>
                เข้าสู่ระบบ
            </Button>

            <View style={styles.signup}>
                <Text style={styles.label}>คุณยังไม่มีบัญชีใช่ไหม ? </Text>
                <TouchableOpacity onPress={onOpenRegister}>
                    <Text style={styles.link}>สมัครสมาชิก</Text>
                </TouchableOpacity>
            </View>
            <Spinner loading={loading} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '80%',
        height: 44,
        marginVertical: 20
    },
    inputContainer: {
        width: '80%',
        marginVertical: 6,
    },
    input: {
        backgroundColor: DefaultTheme.colors.surface,
    },
    logo: {
        width: 110,
        height: 100,
        resizeMode: 'contain'
    },
    welcome: {
        width: 160,
        height: 70,
        resizeMode: 'contain'
    },
    signup: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: Theme.colors.secondary,
    },
    link: {
        color: Theme.colors.primary,
    }
});
