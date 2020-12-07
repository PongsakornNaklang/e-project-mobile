import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faComment, faCalendar, faCalendarCheck, faCalendarAlt, faBell } from '@fortawesome/free-solid-svg-icons'
import UserAvatar from 'react-native-user-avatar';
import Animated from 'react-native-reanimated';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <UserAvatar style={styles.avatar} name="Pongsakorn Naklang" />
                </View>
                <View>
                    <Text style={styles.subtitle}>B6074562</Text>
                    <Text style={styles.title}>Pongsakorn Naklang (G40)</Text>
                </View>
                <TouchableHighlight style={styles.chat} onPress={() => navigation.push('Chat')} underlayColor='#999'>
                    <View >
                        <FontAwesomeIcon icon={faComment} size={25} color='#333' />
                    </View>
                </TouchableHighlight>
            </View>
            <SafeAreaView style={styles.body}>
                <View>
                    <Text>Meets</Text>
                    <Animated.ScrollView
                        style={styles.scroll_view}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={5}
                    >
                        <View style={[styles.fake_card, { backgroundColor: '#3a8381'}]} >
                            <FontAwesomeIcon icon={faCalendarAlt} size={24} color='white' style={{marginBottom: 5}} />
                            <Text style={{ color:'#fff', fontWeight: 'bold'}}>@C1 building</Text>
                            <Text style={{ color:'#fff', fontSize: 12}}>7 Dec 2020</Text>
                            <Text style={{ color:'#fff', fontSize: 12}}>13:00</Text>
                        </View>
                        <View style={styles.fake_card} />
                        <View style={styles.fake_card} />
                        <View style={styles.fake_card} />
                    </Animated.ScrollView>
                </View>
                <View>
                    <Text>Notification</Text>
                    <Animated.ScrollView
                        style={styles.scroll_view}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={5}
                    >
                         <View style={[styles.fake_card, { backgroundColor: '#6666ff'}]} >
                            <FontAwesomeIcon icon={faBell} size={24} color='white' style={{marginBottom: 5}} />
                            <Text style={{ color:'#fff', fontWeight: 'bold'}}>New Notify</Text>
                            <Text style={{ color:'#fff', fontSize: 12}}>7 Dec 2020</Text>
                            <Text style={{ color:'#fff', fontSize: 12}}>13:00</Text>
                        </View>
                        <View style={styles.fake_card} />
                        <View style={styles.fake_card} />
                        <View style={styles.fake_card} />
                    </Animated.ScrollView>
                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 35
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
    chat: {
        position: 'absolute',
        right: 20,
        padding: 10,
        borderRadius: 50,
    },
    header: {
        height: '15%',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    scroll_view: {
        flexDirection: 'row',
    },
    fake_card: {
        width: 120,
        height: 140,
        backgroundColor: '#dddddd',
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})