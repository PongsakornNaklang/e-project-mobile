import { app_config } from "../config/app_config"
import axios from "axios"
import { AsyncStorage, Alert } from "react-native"

export const setStorage = async (name, obj_value) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(obj_value))
    } catch (error) {
        console.log('[!] SetStorage(' + name + ') >> ', error);
    }
}

export const checkLogin = async () => {
    try {
        const token =  await AsyncStorage.getItem('token')
        return (token ? true: false)
    } catch (error) {
    }
    return false
}

const headers = { 'Content-Type': 'application/json;charset=utf-8' }

export const LoginService = async (username, password) => {
    const params = { username, password }
    try {
        let res = await fetch(app_config.api + '/auth/login', { method: 'post', headers, body: JSON.stringify(params) })
        let data = await res.json()
        console.log(data);
        if (data) {
            const { user, token } = data
            if (user && token && user.role === 'student') {
                await Promise.all([
                    setStorage('user', user),
                    setStorage('token', token),
                    setProjectStorage(user.studentId)
                ])
                return true
            }
        }
    } catch (error) {
        Alert.alert('Login', error)
    }
    return false
}

export const logout = async () => {
    try {
        // await Promise.all([
        //     setStorage('user', {}),
        //     setStorage('token', {}),
        //     setStorage('project',{})
        // ])
        await AsyncStorage.clear()
        return true
    } catch (error) {
        Alert.alert('Logout', error)
    }
    return false
}

export const setProjectStorage = async (studentId) => {
    const params = { studentId }
    try {
        const res = await fetch(app_config.api + '/projects/getProjectDetailForStudent', { method: 'POST', headers, body: JSON.stringify(params) })
        const data = await res.json()
        setStorage('project', data)
    } catch (error) {
        console.log('[!] setProjectStorage ', error);
    }
}

export const insertStudentCheckIn = async (week_name, advisor_id, student_id, callback) => {
    const params = { week_name, advisor_id, student_id }
    const res = await fetch(app_config.api + "/studentplan/v2/insertStudentCheckIn",  { method: 'POST', headers, body: JSON.stringify(params) })
    const data =  await res.json()

    if (data) {
        callback(data.result)
    } else {
        callback(false)
    }
}

export const checkStudentCheckIn = async (week_name, student_id, callback) => {
    const params = { week_name, student_id }
    const res = await fetch(app_config.api + "/studentplan/v2/checkStudentCheckIn", { method: 'POST', headers, body: JSON.stringify(params) } )
    const data =  await res.json()
    if (data) {
        callback(data.result)
    } else {
        callback(false)
    }
}


export const postselectProgressPercent = (team_id) => {
    const params = { team_id }
    return axios.post(app_config.api + "/studentplan/v2/selectProgressPercent", params)
        .then(response => response.status === 200 ? response.data.result : false)
        .catch(error => {
            console.log(error);
            return false
        })
}

export const postselectProgressOfWeek = (team_id) => {
    const params = { team_id }
    return axios.post(app_config.api + "/studentplan/v2/selectProgressOfWeek", params)
        .then(response => response.status === 200 ? response.data.result : false)
        .catch(error => {
            console.log(error);
            return false
        })
}

export const postselectAllProgressOfWeek = (team_id) => {
    const params = { team_id }
    return axios.post(app_config.api + "/studentplan/v2/selectAllProgressOfWeek", params)
        .then(response => response.status === 200 ? response.data.result : false)
        .catch(error => {
            console.log(error);
            return false
        })
}

export const postgetCurrentWeek = () => {
    return axios.post(app_config.api + "/studentplan/v2/getCurrentWeek")
        .then(response => response.status === 200 ? response.data.result : false)
        .catch(error => {
            console.log(error);
            return false
        })
}

export const postSelectAllStudentCheckIn = (student_id) => {
    const params = { student_id }
    return axios.post(app_config.api + "/studentplan/v2/selectAllStudentCheckIn", params)
        .then(response => response.status === 200 ? response.data.result : false)
        .catch(error => {
            console.log(error);
            return false
        })
}

export const selectAdvisorById = (advisor_id) => {
    const params = { advisor_id }
    return axios.post(app_config.api + "/studentplan/v2/selectAdvisorById", params)
        .then(response => response.status === 200 ? response.data.result : false)
        .catch(error => {
            console.log(error);
            return false
        })
}
