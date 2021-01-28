import React, { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, StyleSheet, AsyncStorage, Text, Image, ActivityIndicator, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { LoginService, checkLogin } from '../hooks/Services'
import { Button } from 'react-native-paper';

export const LogInScreen = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const unmounted = useRef(false);

    useEffect(() => {
        return () => { unmounted.current = true }
    }, []);

    const onLogin = async () => {
        setLoading(true)
        try {
            const login = await LoginService(userName, password)
            if (!login) {
                Alert.alert('ล็อกอินไม่สำเร็จ', 'โปรดตรวจสอบชื่อผู้ใช้และรหัสผ่าน')
            } else {
                const isLogin = await checkLogin()
                props.navigation.navigate('Home', { isLogin })
            }
            console.log('onLogin', login)
        } catch (error) {
            console.log('error', error)
        }
        
        if (!unmounted.current) {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./../assets/logo.png')} />
            <Text style={styles.titleText}>สวัสดี ยินดีต้อนรับเข้าสู่ E-Project</Text>
            <TextInput
                value={userName}
                keyboardType='email-address'
                onChangeText={(email) => setUserName(email)}
                placeholder='ชื่อผู้ใช้'
                placeholderTextColor='#333333'
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'รหัสผ่าน'}
                placeholderTextColor='#333333'
                secureTextEntry={true}
                style={styles.input}
            />
            <Button style={styles.button} mode="contained" loading={loading} onPress={() => onLogin()}>
                เข้าสู่ระบบ
            </Button>

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
        width: 160,
        height: 44,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        marginHorizontal: 20
    },
    input: {
        width: 250,
        fontSize: 14,
        height: 36,
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#333333',
        marginVertical: 10,
        borderRadius: 25,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
});
