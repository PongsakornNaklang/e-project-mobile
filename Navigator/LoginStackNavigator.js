import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { OnBoardingScreen } from '../screens/OnBoardingScreen';
import { LogInScreen } from '../screens/LogInScreen';


const Stack = createStackNavigator();

export const LoginStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"OnBoarding"} screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
            < Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }
            } />
        </Stack.Navigator >
    )
}
