import React, { useState, useEffect } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { QRScannerScreen } from '../screens/QRScannerScreen';
import { LogInScreen } from '../screens/LogInScreen';
import { AsyncStorage, Alert } from 'react-native';
import { checkLogin } from '../hooks/Services';
import { CheckInScreen } from '../screens/CheckInScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    const [login, setLogin] = useState(false)
    const [checkIn, setCheckIn] = useState({})

    useEffect(() => {
        (async () => {
            const isLogin = await checkLogin()
            console.log(isLogin);
            setLogin(isLogin)
        })
    }, [])

    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >
            <Stack.Screen name="Home" options={{ headerShown: false }} initialParams={{ isLogin: login}}  >
                {props => props.route.params.isLogin ? <HomeScreen {...props} /> : <LogInScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="QRCode" component={QRScannerScreen} options={{ headerShown: true, headerTitle: 'สแกน QRCode เช็คชื่อ' }} />
            <Stack.Screen name="CheckIn" component={CheckInScreen} options={{ headerShown: true, headerTitle: 'รายละเอียดการเช็คชื่อ' }} initialParams={{ checkIn }} />
            <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false}} initialParams={{ isLogin: false}} />
        </Stack.Navigator>
    )
}
