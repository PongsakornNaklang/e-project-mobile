import React from 'react'
import { View, Text, Animated, TouchableNativeFeedback, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

export const MeetSwiper = () => {
    return (
        <View>
            <Text style={{ marginLeft: 20 }}>Meets</Text>
            <Animated.ScrollView
                style={styles.scroll_view}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={5}
            >
                <TouchableWithoutFeedback onPress={() => alert('Meet')} useForeground={true} background={TouchableNativeFeedback.Ripple('#777', true)}>
                    <View style={styles.card} >
                        <FontAwesomeIcon icon={faPlus} size={24} color='white' style={{ marginBottom: 5 }} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableNativeFeedback onPress={() => alert('Meet')} useForeground={true} background={TouchableNativeFeedback.Ripple('#777', true)}>
                    <View style={[styles.card, { backgroundColor: '#3a8381' }]} >
                        <FontAwesomeIcon icon={faCalendarAlt} size={24} color='white' style={{ marginBottom: 5 }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>@C1 building</Text>
                        <Text style={{ color: '#fff', fontSize: 12 }}>7 Dec 2020</Text>
                        <Text style={{ color: '#fff', fontSize: 12 }}>13:00</Text>
                    </View>
                </TouchableNativeFeedback>
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