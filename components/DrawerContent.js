import React, { useEffect, useState, useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useIsDrawerOpen } from '@react-navigation/drawer'
import { View, StyleSheet, Text, AsyncStorage, Alert, Image, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,  faSignOutAlt, faUserCheck, faCog, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import { Theme } from './Theme';
import { AvatarUser } from './AvatarUser';

export const DrawerContent = (props) => {
    const { onLogout } = useContext(AuthContext);
    const { user, project } = useContext(UserContext);

    const Logout = async () => {
        try {
            await onLogout()
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.head}>
                    <AvatarUser name={user.studentName} avatar={user.avartar} />
                    <Text style={styles.subtitle}>{user != null ? user['studentId'] : null}</Text>
                    <Text style={styles.title}>{user != null ? user['studentName'] : null}</Text>
                    <Text style={styles.title}>{project != null ? 'G' + String(project['groupNo']).padStart(2, '0') : null}</Text>
                </View>
                {/* <DrawerItemList {...props} /> */}
                <View style={styles.drawer_section}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faHome} size={size} color={Theme.colors.primary} />
                        )}
                        label="หน้าแรก"
                        onPress={() => { props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faQrcode} size={size} color={Theme.colors.primary} />
                        )}
                        label="สแกน QRCode เช็คชื่อ"
                        onPress={() => { props.navigation.navigate('QRCode') }}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottom_section}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <FontAwesomeIcon icon={faSignOutAlt} size={size} color={Theme.colors.primary} />
                    )}
                    label='ออกจากระบบ'
                    onPress={Logout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        flex: 1,
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        fontSize: 18,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '100'
    },
    bottom_section: {
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        marginBottom: 15
    },
    drawer_section: {
        marginVertical: 15,
    },
})