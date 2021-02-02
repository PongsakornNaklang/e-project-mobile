import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage, Dimensions, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { decode, encode } from 'base-64'
import { insertStudentCheckIn, checkStudentCheckIn } from '../services/Services';

export const QRScannerScreen = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            const userStorage = await AsyncStorage.getItem('user')
            if (userStorage != null) {
                setUser(JSON.parse(userStorage))
            }
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const data_x = decode(data)
        const [data_obj] = JSON.parse(data_x)
        console.log(data_obj, user['studentId'])
        const advisor_id = data_obj['a']
        const week_name = data_obj['b']

        checkStudentCheckIn(week_name, user['studentId'], (res) => {
            if (res) {
                insertStudentCheckIn(week_name, advisor_id, user['studentId'], (res) => {
                    if (res) {
                        Alert.alert('เช็คชื่อ', `เช็คชื่อประจำสัปดาห์ที่ ${week_name} แล้ว 🎉`)
                        props.navigation.navigate('Home')
                    } else {
                        Alert.alert('เช็คชื่อ', `เช็คชื่อประจำสัปดาห์ที่ ${week_name} ไม่สำเร็จ 🤣`)
                    }
                })
            } else {
                Alert.alert('เช็คชื่อ', `คุณได้เช็คชื่อประจำสัปดาห์ที่ ${week_name} แล้ว`)
                props.navigation.navigate('Home')
            }
        })


    };

    if (hasPermission === null) {
        return <Text>ขออณุญาตเข้าถึงกล้อง</Text>;
    }
    if (hasPermission === false) {
        return <Text>ไม่สามารถเข้าถึงกล้องได้</Text>;
    }


    return (
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject]}
            BarCodeSize={{ height: Dimensions.get("screen").height, width: Dimensions.get('screen').width }}
        >
            <View style={styles.layerTop} />
            <View style={styles.layerCenter}>
                <View style={styles.layerLeft} />
                <View style={styles.focused} />
                <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom} />
            {scanned && <Button title={'แตะเพื่อสแกนอีกครั้ง'} onPress={() => setScanned(false)} />}
        </BarCodeScanner>
    )
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    layerTop: {
        flex: 0.5,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 10
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 0.5,
        backgroundColor: opacity
    },
});