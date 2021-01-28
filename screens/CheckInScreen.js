import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Card, Title, Chip, Subheading, Avatar } from 'react-native-paper'
import { StringDateDiff } from '../hooks/BeautyDate'
import moment from "moment";

export const CheckInScreen = (props) => {
    const { checkIn, user } = props.route.params

    console.log(checkIn);
    return (
        <View>
            <Card style={{ flexDirection: 'row', padding: 20, margin: 20, backgroundColor: '#3f51b5', borderRadius: 20 }}>
                <Title style={styles.text}>{'สัปดาห์ที่ '}{checkIn.week_name}</Title>
                <Text style={styles.text} >{'เช็คชื่อเมื่อ '}{StringDateDiff(moment.unix(checkIn.check_in_date), new Date())}</Text>

                <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginVertical: 10, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            user['avartar'] !== null ? <Avatar.Image size={50} source={{ uri: `${app_config.api}/public/profile/${user['avartar']}` }} />
                                : <Avatar.Text size={50} label={user['studentName'][0]} labelStyle={{ fontSize: 24 }} style={{ backgroundColor: 'green' }} />
                        }
                        <Text style={[styles.text, { marginHorizontal: 10 }]}>{user['studentName']}</Text>
                        <Chip style={{ height: 24, alignItems: 'center' }} textStyle={{ fontSize: 12, color: 'gray' }}>{`${String(user['studentId'])}`}</Chip>
                    </View>
                </View>

                <Text style={styles.text}>{'ผู้เช็คชื่อ'}</Text>

                <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            checkIn['advisor_avartar'] !== null ? <Avatar.Image size={50} source={{ uri: `${app_config.api}/public/profile/${checkIn['advisor_avartar']}` }} />
                                : <Avatar.Text size={50} label={checkIn['advisor_name'][0]} labelStyle={{ fontSize: 24 }} style={{ backgroundColor: 'green' }} />
                        }
                        <Text style={[styles.text, { marginHorizontal: 10 }]}>{checkIn['advisor_name']}</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
})