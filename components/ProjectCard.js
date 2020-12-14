import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import StepIndicator from 'react-native-step-indicator';

export const ProjectCard = () => {

    const labels = ["Planning", "Design", "Coding", "Testing", "Deploy"];

    const customStyles = {
        labelAlign: 'flex-start',
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 6,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 0,
        currentStepIndicatorLabelFontSize: 0,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 14,
        currentStepLabelColor: '#fe7013'
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>E-Project</Text>
            
                <Text style={[styles.title_overview, {paddingHorizontal: 10}]}>Your progress</Text>
            <View style={{ marginVertical: 20}}>
                <StepIndicator
                customStyles={customStyles}
                currentPosition={1}
                labels={labels}
                direction={'horizontal'}
                renderStepIndicator={() => <FontAwesomeIcon icon={faCheck} color={'#fff'} />}
            />
            </View>
            
            {/* <View style={{ minHeight: 270, flexDirection: 'row', justifyContent: 'flex-end' }}>

                <View style={{ minWidth: '50%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text>Your progress</Text>
                    <Text style={{ fontSize: 32 }}>75%</Text>
                    <Text >to complete</Text>
                </View>

            </View> */}
            <View style={styles.card_container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.title_overview}>Project Overview</Text>
                    <FontAwesomeIcon style={{ marginHorizontal: 10 }} icon={faEdit} size={14} color={'#333'} />
                </View>

                <Text style={styles.detail} ellipsizeMode={'tail'} numberOfLines={4}>
                    {'        '}It is a long established fact that a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-
                    less normal distribution of letters, as opposed to using 'Content here, content here', making
                    it look like readable English. Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card_container: {
        height: 120,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#dddddd',
        borderRadius: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        alignSelf: 'center'
    },
    title_overview: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    detail: {
        fontSize: 14,
        color: '#333'
    }
})