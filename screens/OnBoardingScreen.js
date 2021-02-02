import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { Button, Paragraph } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';
import { Theme } from '../components/Theme';

export const OnBoardingScreen = (props) => {
    const onOpenRegister = async () => {
        await WebBrowser.openBrowserAsync('http://it2.sut.ac.th/project63_g40/register');
      };

    return (
        <View style={styles.background}>
            <Image style={styles.logo} source={require('../assets/logo-outline-v.png')} />
            <Paragraph style={styles.paragraph}>
                แอปพลิเคชั่นสำหรับเช็คชื่อในระบบ E-Project ด้วยการสแกน QRCode
            </Paragraph>
            <Button
                mode="contained"
                style={styles.button}
                onPress={() => props.navigation.navigate('Login')}
            >
                {'เข้าสู่ระบบ'}
            </Button>
            <Button
                mode={'outlined'}
                onPress={onOpenRegister}
            >
                {'สมัครสมาชิก'}
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        height: Dimensions.get('screen').height,
    },
    logo: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    paragraph: {
        color: Theme.colors.secondary,
        marginVertical: 30,
        marginHorizontal: 30,
        textAlign: 'center'
    },
    button: {
        marginVertical: 10
    }
});
