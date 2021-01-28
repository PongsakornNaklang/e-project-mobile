import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useIsDrawerOpen } from '@react-navigation/drawer'
import { View, StyleSheet, Text, AsyncStorage, Alert, Image } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faQrcode, faCog, faSignOutAlt, faUserFriends, faSearch, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { logout, checkLogin } from '../hooks/Services';
import { app_config } from '../config/app_config';
import { Avatar } from 'react-native-paper';

export const DrawerContent = (props) => {
    const [user, setUser] = useState({})
    const [project, setProject] = useState({})
    const isDrawerOpen = useIsDrawerOpen();

    const initData = async () => {
        const [user_str, project_str] = await Promise.all([
            AsyncStorage.getItem('user'),
            AsyncStorage.getItem('project')
        ])

        console.log(user_str);
        const user_obj = JSON.parse(user_str)
        setUser(user_obj)

        console.log(project_str);
        const project_obj = JSON.parse(project_str)
        setProject(project_obj)
    }

    const onLogout = async () => {
        const isLogout = await logout()
        
        const isLogin = await checkLogin()
        console.log(isLogin);
        if (isLogout) {
            props.navigation.navigate('Login', { isLogin: false })
        } 
    }

    if (isDrawerOpen) {
        if (Object.keys(user).length === 0 && Object.keys(project).length === 0) {
            initData()
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
                {
                    user['avartar'] !== null ? <Avatar.Image size={50} source={{ uri: `${app_config.api}/public/profile/${user['avartar']}` }} />
                        : <Avatar.Text size={50} label={user['studentName'][0]} labelStyle={{ fontSize: 14 }} style={{ backgroundColor: 'green' }} />
                }
                    {/* <UserAvatar style={styles.avatar} src={user['avartar'] != null ? `${app_config.api}/public/profile/${user['avartar']}`: null} name={user['studentName']}  /> */}
                    {/* <Image source={{ uri: `${app_config.api}/public/profile/${user['avartar']}` }} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                    <Text style={styles.subtitle}>{user != null ? user['studentId'] : null}</Text>
                    <Text style={styles.title}>{user != null ? user['studentName'] : null}</Text>
                    <Text style={styles.title}>{project != null ? 'G' + String(project['groupNo']).padStart(2, '0') : null}</Text>
                </View>
                {/* <DrawerItemList {...props} /> */}
                <View style={styles.drawer_section}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faHome} size={size} color={'#3f51b5'} />
                        )}
                        label="หน้าแรก"
                        onPress={() => { props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesomeIcon icon={faUserCheck} size={size} color={'#3f51b5'} />
                        )}
                        label="เช็คการเข้าพบที่ปรึกษา"
                        onPress={() => { props.navigation.navigate('CheckSign') }}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottom_section}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <FontAwesomeIcon icon={faSignOutAlt} size={size} color={'#3f51b5'} />
                    )}
                    label='ออกจากระบบ'
                    onPress={onLogout} />
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