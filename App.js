import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigator } from './Navigator/HomeStackNavigator';
import { SettingScreen } from './screens/SettingScreen';
import { DrawerContent } from './components/DrawerContent';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="QR code" options={{ headerShown: true }} component={SettingScreen} />
        <Drawer.Screen name="Search" options={{ headerShown: true }} component={SettingScreen} />
        <Drawer.Screen name="My Group" options={{ headerShown: true }} component={SettingScreen} />
        <Drawer.Screen name="Setting" options={{ headerShown: true }} component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}