import React from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export const NotificationSwiper = () => {
    return (
        <View>
            <Text style={{ marginLeft: 20 }}>Notification</Text>
            <Animated.ScrollView
                style={styles.scroll_view}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={5}
            >
                <View style={[styles.card, { backgroundColor: '#6666ff' }]} >
                    <FontAwesomeIcon icon={faBell} size={24} color='white' style={{ marginBottom: 5 }} />
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>New Notify</Text>
                    <Text style={{ color: '#fff', fontSize: 12 }}>7 Dec 2020</Text>
                    <Text style={{ color: '#fff', fontSize: 12 }}>13:00</Text>
                </View>
                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll_view: {
        flexDirection: 'row',
        paddingLeft: 10,
    },
    card: {
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