import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { NotificationScreen } from '../screens/NotificationScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat of G40' }} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification' }} />
        </Stack.Navigator>
    )
}
