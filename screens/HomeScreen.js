import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableNativeFeedback, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faComment, faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import UserAvatar from 'react-native-user-avatar';
import { MeetSwiper } from '../components/MeetSwiper';
import { NotificationSwiper } from '../components/NotificationSwiper';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()} background={TouchableNativeFeedback.Ripple('#777', true)} >
                    <View style={styles.icon_button}>
                        <FontAwesomeIcon icon={faBars} size={25} color='#333' />
                    </View>
                </TouchableNativeFeedback>
                <Text>E-PROJECT</Text>
                <View style={styles.icon_right}>
                    <TouchableNativeFeedback onPress={() => navigation.push('Chat')} background={TouchableNativeFeedback.Ripple('#777', true)} >
                        <View style={styles.icon_button}>
                            <FontAwesomeIcon icon={faBell} size={25} color='#333' />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => navigation.push('Chat')} background={TouchableNativeFeedback.Ripple('#777', true)} >
                        <View style={styles.icon_button}>
                            <FontAwesomeIcon icon={faComment} size={25} color='#333' />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <SafeAreaView style={styles.body}>
                <MeetSwiper />
                <NotificationSwiper />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    icon_right: {
        flexDirection: 'row'
    },
    icon_button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        width: 32,
        marginHorizontal: 7
    },
    header: {
        flex: 1,
        maxHeight: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 0
    },
})