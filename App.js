import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { HomeStackNavigator } from './Navigator/HomeStackNavigator';
import { SettingScreen } from './screens/SettingScreen';
import { Text } from 'react-native';
import { HeadDrawerContent } from './components/HeadDrawerContent';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <HeadDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="QR code" component={HomeStackNavigator} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}