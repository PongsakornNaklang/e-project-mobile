import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { View, StyleSheet, Text } from 'react-native'
import UserAvatar from 'react-native-user-avatar';

export const HeadDrawerContent = (props) => {
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
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.bottom_section}>
                <DrawerItem label='Sign out' />
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
})