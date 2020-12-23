import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import StepIndicator from 'react-native-step-indicator'
import moment from "moment";
import { TaskCard } from './TaskCard'
import { task_dummy } from '../storage/task.dummy'
import { ScrollView } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'

export const ProjectCard = () => {
    const [subTasks, setSubTasks] = useState(task_dummy.sub_tasks)
    const [currentPage, setCurrentPage] = useState(task_dummy.current_week - 1)

    const labels = ["Planning", "Design", "Coding", "Testing", "Deploy"]

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

    const onStepPress = (position) => {
        setCurrentPage(position);
    }

    const renderViewPagerPage = (subtask) => {
        return (
            <ScrollView style={{marginHorizontal: 10}}>
                {subtask.map((task) => {
                    return <TaskCard key={task.name} title={task.name} des={task.description} completed={task.completed} />
                })}
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>E-Project</Text>

            <Text style={[styles.title_overview, { paddingHorizontal: 10 }]}>Your progress</Text>
            <View style={{ marginVertical: 20 }}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPage}
                    labels={labels}
                    direction={'horizontal'}
                    renderStepIndicator={() => <FontAwesomeIcon icon={faCheck} color={'#fff'} />}
                    // onPress={onStepPress}
                />
            </View>

            <Text style={{ paddingHorizontal: 10 }}>Week {task_dummy.current_week} ({moment().format('LL')})</Text>
            <Swiper
                height={180}
                loop={false}
                index={currentPage}
                autoplay={false}
                showsButtons={false}
                showsPagination={false}
                onIndexChanged={(page) => {
                    setCurrentPage(page);
                }}
            >
                {subTasks.map((subtask) => renderViewPagerPage(subtask))}
            </Swiper>
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