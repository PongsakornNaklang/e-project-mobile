import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput, Button, Text, TouchableHighlight } from 'react-native'
import { ChatBubble } from '../components/ChatBubble'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export const ChatScreen = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
        }}>
            {/* <Button title='Back' />
            <View style={styles.header}>
                <Text style={{ color: '#333', fontSize: 16 }}>GROP 40</Text>
            </View> */}
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <ChatBubble image={require('../assets/icon.png')} text="Hi ✋ " mine time="14:30" />
                    <ChatBubble text="Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii how are you? 😁" sender="Bank" time="14:31" />
                    <ChatBubble text="What r u doing?" mine time="14:33" />
                    <ChatBubble text="work a project 😂" sender="Bank" time="14:34" />
                    <ChatBubble text="me too " mine time="14:35" />
                    <ChatBubble text="work a project 😂" sender="Bank" time="14:36" />
                    <ChatBubble text="me too " mine time="14:37" />
                    <ChatBubble text="work a project 😂" sender="Bank" time="14:38" />
                    <ChatBubble text="... 😂" mine time="14:39" />
                    <ChatBubble text="work a project 😂" sender="Bank" time="14:40" />
                    <ChatBubble text="me too " mine time="14:42" />
                    <ChatBubble text="work a project 😂" sender="Bank" time="14:45" />
                    <ChatBubble text="me too " mine time="14:45" />
                    <ChatBubble text="work a project 😂" sender="Bank" time="14:46" />
                    <ChatBubble text="me too " mine time="14:47" />
                </ScrollView>
            </SafeAreaView>
            <View style={styles.input_container}>
                <TouchableHighlight onPress={() => alert('Choose image')} underlayColor='#999'>
                    <View>
                        <FontAwesomeIcon icon={faImage} color='#777' size={20} />
                    </View>
                </TouchableHighlight>
                <TextInput placeholder="massage" style={styles.input} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        backgroundColor: '#fafafa',
        marginHorizontal: 2,
    },
    input_container: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.6,

        elevation: 4,
    },
    input: {
        backgroundColor: '#f5f5f5',
        width: "80%",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 15
    },
    header: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.6,
        elevation: 4,
    }
})