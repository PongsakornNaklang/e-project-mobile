import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import { HomeStackNavigator } from './navigator/HomeStackNavigator';
import { QRScannerScreen } from './screens/QRScannerScreen';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import { useAuth } from './hooks/useAuth';
import { LoginStackNavigator } from './navigator/LoginStackNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  const { auth, state } = useAuth();

  const renderScreen = () => {
    return state.user != null ? (
      <UserContext.Provider value={state}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
          <Drawer.Screen name="CheckSign" options={{ headerShown: true }} component={QRScannerScreen} />
        </Drawer.Navigator>
      </UserContext.Provider>

    )
      : (
        <LoginStackNavigator />
      )
  }

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        {renderScreen()}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}