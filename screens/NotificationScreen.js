import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import Animated from 'react-native-reanimated'
import UserAvatar from 'react-native-user-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const NotificationScreen = () => {
    return (
        <View >
            <Animated.ScrollView style={styles.scroll_view}>
                <TouchableWithoutFeedback onPress={()=>alert('show detail')}>
                    <View style={[styles.card, { backgroundColor: '#6666ff' }]} >
                        <UserAvatar style={styles.avatar} name="System" />
                        <SafeAreaView>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>IT Show case 2020</Text>
                            <Text style={{ color: '#fff', fontWeight: 'normal', fontSize: 12 }}>IT Show case 2020 at {'\n'} Study Building ...</Text>
                            <Text style={{ color: '#fdfdfd', fontWeight: '100', fontSize: 12 }}>
                                <FontAwesomeIcon icon={faClock} size={12} color='#fff' />
                                {' '}
                            Today 13:00
                        </Text>
                        </SafeAreaView>

                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll_view: {
        width: '100%',
        paddingVertical: 10
    },
    card: {
        height: 100,
        backgroundColor: '#dddddd',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        fontSize: 18,
        marginRight: 10,
    },
})