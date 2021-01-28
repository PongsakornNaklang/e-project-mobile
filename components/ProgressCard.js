import React, { useState, useEffect } from 'react'
import { Card, Title, Text } from 'react-native-paper';
import { StyleSheet, AsyncStorage, View } from 'react-native';
import { postselectProgressPercent, postselectProgressOfWeek, postgetCurrentWeek } from '../hooks/Services'

export const ProgressCard = () => {
    const [overAllProgress, setOverAllProgress] = useState()
    const [weekProgreess, setWeekProgress] = useState()
    const [currentWeek, setCurrentWeek] = useState(0)


    const getProgessPercent = async (teamId, callback) => {
        const res = await postselectProgressPercent(teamId)
        if (res) {
            callback(res)
        } else {
            callback(0)
        }
    }

    const getProgessOfWeek = async (teamId, callback) => {
        const res = await postselectProgressOfWeek(teamId)
        if (res) {
            callback(res)
        } else {
            callback(0)
        }
    }

    const getCurrentWeek = async (callback) => {
        const res = await postgetCurrentWeek()
        if (res) {
            callback(res)
        } else {
            callback(0)
        }
    }

    const getTeamId = async (callback) => {
        const project = await AsyncStorage.getItem('project')
        const project_obj = JSON.parse(project)
        const { teamId } = project_obj
        callback(teamId)
    }

    useEffect(() => {
        getTeamId((teamId) => {
            getProgessPercent(teamId, (res_all) => {
                setOverAllProgress(res_all)
                getCurrentWeek(setCurrentWeek)
                getProgessOfWeek(teamId, (res_week) => {
                    setWeekProgress(res_all - res_week.progress)
                })

            })
        })
    }, [])

    return (
        <View>
            <Text>{`📊 ความคืบหน้า (สัปดาห์ที่ ${currentWeek})`}</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Title style={styles.title}>{`สัปดาห์นี้ `}</Title>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Title style={styles.text}>{isNaN(weekProgreess) ? 0 + ' %' : weekProgreess + ' %'}</Title>
                    </View>

                </View>
                <View style={styles.card}>
                    <Title style={styles.title}>{`ทั้งหมด`}</Title>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Title style={styles.text}>{overAllProgress + ' %'}</Title>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        width: '48%',
        height: 120,
        backgroundColor: '#3f51b5',
        borderRadius: 20,
        flexDirection: 'column',
        padding: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginBottom: 20
    },
    text: {
        fontSize: 30,
        color: '#fafafa',

    },
    title: {
        fontSize: 14,
        color: '#fafafa',
    }
})