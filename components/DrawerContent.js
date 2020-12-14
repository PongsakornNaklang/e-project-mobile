import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { View, StyleSheet, Text } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faQrcode, faCog, faSignOutAlt, faLayerGroup, faObjectGroup, faUserFriends, faSearch } from '@fortawesome/free-solid-svg-icons';

export const DrawerContent = (props) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.head}>
                    <UserAvatar style={styles.avatar} name="Pongsakorn Naklang" />
                    <Text style={styles.subtitle}>B6074562</Text>
                    <Text style={styles.title}>Pongsakorn Naklang</Text>
                    <Text style={styles.title}>Group 40</Text>
                </View>
                {/* <DrawerItemList {...props} /> */}
                <View style={styles.drawer_section}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faHome} size={size} color={color} />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faSearch} size={size} color={color} />
                        )}
                        label="Search"
                        onPress={() => { props.navigation.navigate('Search') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faQrcode} size={size} color={color} />
                        )}
                        label="QR code"
                        onPress={() => { props.navigation.navigate('QR code') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faUserFriends} size={size} color={color} />
                        )}
                        label="My Group"
                        onPress={() => { props.navigation.navigate('My Group') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faCog} size={size} color={color} />
                        )}
                        label="Setting"
                        onPress={() => { props.navigation.navigate('Setting') }}
                    />

                </View>
            </DrawerContentScrollView>
            <View style={styles.bottom_section}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <FontAwesomeIcon icon={faSignOutAlt} size={size} color={color} />
                    )}
                    label='Sign out' />
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