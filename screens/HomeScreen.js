import React, { useState, useEffect, useCallback, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableNativeFeedback, Image, AsyncStorage, FlatList, RefreshControl, TouchableOpacity, Animated } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressCard } from '../components/ProgressCard';
import { postSelectAllStudentCheckIn } from '../services/Services';
import { StringDateDiff } from '../services/BeautyDate';
import { app_config } from '../config/app_config';
import { Avatar, Chip, List, Card } from 'react-native-paper';
import moment from "moment";
import LoopText from 'react-native-loop-text';
import { LinearGradient } from 'expo-linear-gradient';
import { UserContext } from '../contexts/UserContext';

export const HomeScreen = (props) => {
    // const [user, setUser] = useState({})
    // const [project, setProject] = useState({})
    const [refreshing, setRefreshing] = useState(false)
    const [checkIn, setCheckIn] = useState([])

    const { user, project } = useContext(UserContext);
    console.log('HomeScreen', user, project);

    const initData = async () => {
        const checkin_data = await postSelectAllStudentCheckIn(user['studentId'])
        console.log(checkin_data);
        setCheckIn(checkin_data)
    }

    useEffect(() => {
        if (checkIn.length === 0){
            initData()
        }
    }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        initData().then(() => setRefreshing(false));
    }, []);


    const renderItem = ({ item }) => {
        return (
            <List.Item
                title={`สัปดาห์ที่ ${item.week_name}`}
                description={StringDateDiff(moment.unix(item.check_in_date), new Date())}
                left={props => <List.Icon {...props} icon="check-circle" color={'green'} style={{ height: 50 }} />}
                right={props => <List.Icon {...props} icon="chevron-right" color={'white'} />}
                style={{ backgroundColor: '#c89feb', marginVertical: 5, borderRadius: 24 }}
                titleStyle={{ color: '#fff' }}
                descriptionStyle={{ color: '#fafafa' }}
                onPress={() => {
                    props.navigation.navigate('CheckIn', { checkIn: item, user: user })
                }}
            />);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableNativeFeedback onPress={() => props.navigation.toggleDrawer()} background={TouchableNativeFeedback.Ripple('#777', true)} >
                    <View style={styles.icon_button}>
                        <FontAwesomeIcon icon={faBars} size={25} color='#333' />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.logo_container}>
                    <Image style={styles.logo} source={require('./../assets/logo.png')} />
                    <Text>E-PROJECT</Text>
                </View>
                <View style={styles.icon_right}>
                    <TouchableNativeFeedback onPress={() => props.navigation.navigate('QRCode')} background={TouchableNativeFeedback.Ripple('#777', true)} >
                        <View style={styles.icon_button}>
                            <FontAwesomeIcon icon={faQrcode} size={25} color='#333' />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#5d69be', padding: 10, marginBottom: 10 }}>
                {
                    user['avartar'] !== null ? <Avatar.Image size={42} source={{ uri: `${app_config.api}/public/profile/${user['avartar']}` }} />
                        : <Avatar.Text size={42} label={user['studentName'][0]} labelStyle={{ fontSize: 14 }} style={{ backgroundColor: 'green' }} />
                }
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Chip style={{ height: 24, alignItems: 'center', marginHorizontal: 10 }} textStyle={{ fontSize: 12, color: 'gray' }}>{`${'G' + String(project['groupNo']).padStart(2, '0')}`}</Chip>
                        <LoopText style={{ fontSize: 14, color: '#fff' }} delay={2000} textArray={[project['projectName'], user['studentName'] + "  กลุ่ม " + 'G' + String(project['groupNo']).padStart(2, '0')]} />
                        {/* <TextTicker
                            duration={3000}
                            loop
                            repeatSpacer={5000}
                            marqueeDelay={1000}
                            style={{ fontSize: 14, color: '#fff' }}
                        >
                            {`${user['studentName']} กลุ่ม G${String(project['groupNo']).padStart(2, '0')} หัวข้อโครงงาน ${project['projectName']} `}
                        </TextTicker> */}
                    </View>
                </View>
            </View>


            <SafeAreaView style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <ProgressCard />
                    <Text>{`เช็คชื่อเข้าพบที่ปรึกษาโครงงาน`}</Text>
                    <View style={{ marginVertical: 10 }}>
                        {
                            checkIn.length !== 0 ? (
                                <FlatList
                                    data={checkIn}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id.toString()}
                                />
                            ) : (
                                    <Card style={{ flexDirection: 'row', height: 150, padding: 20, backgroundColor: '#eaeaea', alignItems: 'center', borderRadius: 20 }}>
                                        <Text style={{ color: 'gray', alignSelf: 'center' }}>{'ไม่พบข้อมูลการเช็คชื่อ'}</Text>
                                    </Card>

                                )
                        }

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        marginHorizontal: 3,
    },
    logo: {
        width: 33,
        height: 33,
        marginHorizontal: 10,
    },
    logo_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#34495e'
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
        marginHorizontal: 10
    },
    header: {
        flex: 1,
        maxHeight: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: -30
    },
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginLeft: 0,
        padding: 10
    },
})