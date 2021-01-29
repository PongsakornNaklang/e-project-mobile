import React from 'react'
import { View, StyleSheet, Dimensions, Image, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export const OnBoardingScreen = (props) => {
    return (
        <LinearGradient
            colors={['#5d69be', '#c89feb', 'transparent']}
            style={styles.background}
        >
            <View>
                <Image style={{ width: 240, height: 80, alignSelf: 'flex-start', margin: 20 }} source={require('../assets/logo_white.png')} />
                <Button
                    title={'เข้าสู่ระบบ'}
                    onPress={()=> props.navigation.navigate('Home')}
                />
                <Button
                    title={'สมัครสมาชิก'}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        height: Dimensions.get('screen').height,
    },
});
