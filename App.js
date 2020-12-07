import React from 'react';
import 'react-native-gesture-handler';
import { ChatScreen } from './screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat of G40' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}