import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Card, Title, Chip } from 'react-native-paper'
import { StringDateDiff } from '../services/BeautyDate'
import moment from "moment";
import { LinearGradient } from 'expo-linear-gradient';
import { AvatarUser } from '../components/AvatarUser';

export const CheckInScreen = (props) => {
    const { checkIn, user } = props.route.params

    console.log('CheckInScreen', checkIn);

    return (
        <View>
            <Card style={styles.container}>
                <LinearGradient
                    colors={['#5d69be', '#c89feb']}
                    style={{ padding: 20, borderRadius: 20 }}
                >
                    <Title style={styles.text}>{'สัปดาห์ที่ '}{checkIn.week_name}</Title>
                    <Text style={styles.text} >{'เช็คชื่อเมื่อ '}{StringDateDiff(moment.unix(checkIn.check_in_date), new Date())}</Text>

                    <View style={styles.row}>
                        <View style={styles.innerRow}>
                            <AvatarUser name={user.studentName} avatar={user.avartar} />
                            <Text style={[styles.text, { marginHorizontal: 10 }]}>{user['studentName']}</Text>
                            <Chip style={{ height: 24, alignItems: 'center' }} textStyle={{ fontSize: 12, color: 'gray' }}>{`${String(user['studentId'])}`}</Chip>
                        </View>
                    </View>

                    <Text style={styles.text}>{'ผู้เช็คชื่อ'}</Text>

                    <View style={styles.row}>
                        <View style={styles.innerRow}>
                            <AvatarUser name={checkIn.advisor_name} avatar={checkIn.advisor_avartar} />
                            <Text style={[styles.text, { marginHorizontal: 10 }]}>{checkIn['advisor_name']}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: '#ffff',
        borderRadius: 20
    },
    text: {
        color: '#fff'
    },
    row: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginVertical: 10,
        marginBottom: 20
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center'

    }
})