import React from 'react'
import { LoginService, ProjectService } from '../services/Services';
import { AsyncStorage, Alert } from 'react-native';

export const useAuth = () => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'LOG_IN':
                    return {
                        ...prevState,
                        isLoading: true,
                        user: action.user,
                        project: action.project,
                    };
                case 'SET_USER':
                    return {
                        ...prevState,
                        isLoading: true,
                        user: action.user,
                        project: action.project,
                    };
                case 'REMOVE_USER':
                    return {
                        ...prevState,
                        isLoading: true,
                        user: null,
                        project: null,
                    };
                case 'LOG_OUT':
                    return {
                        ...prevState,
                        isLoading: true,
                        user: null,
                        project: null,
                    };
            }
        },
        {
            isLoading: false,
            user: null,
            project: null,
        }
    );

    React.useEffect(() => {
        const initData = async () => {
            let user
            let project
            try {
                [user, project] = await Promise.all([
                    AsyncStorage.getItem('user'),
                    AsyncStorage.getItem('project')
                ])
            } catch (e) {

            }
            console.log('initData', user, project);
            dispatch({ type: 'SET_USER', user: JSON.parse(user), project: JSON.parse(project) })
        };
        initData()
    }, []);

    const auth = React.useMemo(
        () => ({
            onLogin: async (username, password) => {
                try {
                    const { user, token } = await LoginService(username, password)
                    console.log(user.studentId);

                    if (user.studentId) {
                        const project = await ProjectService(user.studentId)
                        await Promise.all([
                            AsyncStorage.setItem('user', JSON.stringify(user)),
                            AsyncStorage.setItem('project', JSON.stringify(project))
                        ])
                        dispatch({ type: 'LOG_IN', user: user, project: project })
                    } else {
                        throw 'not student'
                    }

                } catch (error) {
                    console.log(error);
                    if (error == 'not student') {
                        Alert.alert('เข้าสู่ระบบไม่สำเร็จ!', 'เข้าสู่ระบบได้เฉพาะบัญชีนักศึกษาเท่านั้น', [{ text: 'ปิด', style: "cancel" }])
                    } else {
                        Alert.alert('เข้าสู่ระบบไม่สำเร็จ!', 'ชื่อผู้ใช้หรือรหัสผ่านใหม่ไม่ถูกต้อง', [{ text: 'ปิด', style: "cancel" }])
                    }
                }
            },
            onLogout: () => {
                Alert.alert(
                    "ยืนยันการออกจากระบบ",
                    "คุณต้องการออกจากระบบใช่หรือไม่ ? ",
                    [
                        {
                            text: "ไม่",
                            onPress: () => { },
                            style: "cancel"
                        },
                        {
                            text: "ใช่",
                            onPress: async () => {
                                await Promise.all([
                                    AsyncStorage.removeItem('user'),
                                    AsyncStorage.removeItem('project')
                                ])
                                dispatch({ type: 'LOG_OUT' })
                            },
                        }
                    ],
                    { cancelable: false }
                );

            },
        }),
        []
    );

    return { auth, state }
}
