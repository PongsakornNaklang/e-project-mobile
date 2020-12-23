import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import CheckBox from 'react-native-checkbox-heaven';

export const TaskCard = (props) => {
    const [completed, setCompleted] = useState(props.completed)

    const AlertConfirm = (val) => {
        Alert.alert(
            'Confirm',
            'Are you change?',
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                },
                { text: "Yes", onPress: () => val ? setCompleted(true) : setCompleted(false) }
            ],
            { cancelable: false })
    }


    return (
        <View style={[styles.card, !completed ? { backgroundColor: '#379fa7' } : null]}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: !completed ? '#fff' : '#333' }} ellipsizeMode={'tail'} numberOfLines={1}>
                        {props.title}
                    </Text>
                    {!completed ?
                        <View style={{ alignItems: 'center',justifyContent: 'center', backgroundColor: '#e57364' , borderRadius: 7, paddingHorizontal:5, marginLeft: 5 }}>
                            <Text style={{color: '#fff', fontSize: 12}}>in progress</Text>
                        </View> :
                        <View style={{ alignItems: 'center',justifyContent: 'center',backgroundColor: 'gray' , borderRadius: 7, paddingHorizontal:5, marginLeft: 5 }}>
                            <Text style={{ color: '#fafafa', fontSize: 12}}>completed</Text>
                        </View>
                    }
                </View>

                <Text style={{ color: !completed ? '#fff' : 'gray', fontSize: 12 }} ellipsizeMode={'tail'} numberOfLines={1}>
                    {props.des}
                </Text>
            </View>

            <CheckBox
                iconName={'faCircleMix'}
                onChange={AlertConfirm}
                checked={completed}
                checkedColor='gray'
                uncheckedColor='#fff'
            // disabled={props.completed}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 75,
        backgroundColor: '#dddddd',
        marginRight: 10,
        marginTop: 10,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
})