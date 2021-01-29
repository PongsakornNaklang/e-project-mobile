import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { QRScannerScreen } from '../screens/QRScannerScreen';
import { CheckInScreen } from '../screens/CheckInScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="QRCode" component={QRScannerScreen} options={{ headerShown: true, headerTitle: 'สแกน QRCode เช็คชื่อ' }} />
            <Stack.Screen name="CheckIn" component={CheckInScreen} options={{ headerShown: true, headerTitle: 'รายละเอียดการเช็คชื่อ' }} />
        </Stack.Navigator>
    )
}
