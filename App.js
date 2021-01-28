import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from './screens/SettingScreen';
import { DrawerContent } from './components/DrawerContent';
import { HomeStackNavigator } from './navigator/HomeStackNavigator';
import { QRScannerScreen } from './screens/QRScannerScreen';
import { AsyncStorage } from 'react-native';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props}  />}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="CheckSign" options={{ headerShown: true }} component={QRScannerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}