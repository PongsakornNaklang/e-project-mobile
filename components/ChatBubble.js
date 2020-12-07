import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'
var { width, height } = Dimensions.get('window');

export const ChatBubble = (props) => {
    return (
        <View>
            <Text style={[styles.sender, props.mine ? styles.mine : styles.not_mine]}>
                {props.sender}
            </Text>
            <View style={[styles.message, props.mine ? styles.mine : styles.not_mine]}>
                {props.mine ? <Text style={styles.time}>{props.time}</Text> : null}
                <View style={[styles.cloud, { backgroundColor: props.mine ? '#757575' : '#e0e0e0' }]}>
                    {props.image ?
                        <Image style={[styles.image, { alignSelf: props.mine ? 'flex-start' : 'flex-end' }]}
                            resizeMode='cover'
                            borderRadius={10}
                            source={props.image} />
                        : null}
                    {props.text ? <Text style={{ color: props.mine ? "#fff" : "#333" }}>{props.text}</Text> : null}
                </View>
                {!props.mine ? <Text style={styles.time}>{props.time}</Text> : null}
                <View style={[


                    styles.arrow,
                    props.mine ? styles.arrow_right : styles.arrow_left
                ]}>
                    <Svg width={moderateScale(15.5, 0.6)}
                        height={moderateScale(17.5, 0.6)}
                        viewBox="32.484 17.5 15.515 17.5"
                        enable-background="new 32.485 17.5 15.515 17.5">
                        <Path
                            d={props.mine ? "M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" : "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"}
                            fill={props.mine ? '#757575' : '#e0e0e0'}
                            x="0"
                            y="0"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        flexDirection: 'row',
        marginVertical: moderateScale(3, 0)
    },
    sender: {
        color: '#333',
        fontSize: 10
    },
    image: {
        height: height * 0.3,
        width: width * 0.5
    },
    time: {
        alignSelf: "center",
        color: '#333',
        fontSize: 10,
        marginHorizontal: 7
    },
    mine: {
        alignSelf: 'flex-end',
        marginRight: 20
    },
    not_mine: {
        marginLeft: 20,
    },
    cloud: {
        maxWidth: moderateScale(240, 0),
        paddingHorizontal: moderateScale(10, 5),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20
    },
    arrow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1
    },
    arrow_left: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    arrow_right: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
})