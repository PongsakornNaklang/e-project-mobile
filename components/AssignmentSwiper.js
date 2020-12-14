import React from 'react'
import { View, Text, Animated, TouchableNativeFeedback, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'

export const AssignmentSwiper = () => {
    return (
        <View>
            <Text style={{ marginLeft: 20 }}>Assignment</Text>
            <Animated.ScrollView
                style={styles.scroll_view}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={5}
            >
                <TouchableNativeFeedback onPress={() => alert('Assignment')} useForeground={true} background={TouchableNativeFeedback.Ripple('#777', true)}>
                    <View style={[styles.card, { backgroundColor: '#6666ff' }]} >
                        <FontAwesomeIcon icon={faFileSignature} size={24} color='white' style={{ marginBottom: 5 }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Homework D01</Text>
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