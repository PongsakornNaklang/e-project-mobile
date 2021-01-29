import React from 'react'
import { LoginService, ProjectService } from '../services/Services';
import { AsyncStorage } from 'react-native';

export const useAuth = () => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'LOG_IN':
                    return {
                        ...prevState,
                        isLogin: false,
                        user: action.user,
                        project: action.project,
                    };
                case 'SET_USER':
                    return {
                        ...prevState,
                        user: action.user,
                        project: action.project,
                    };
                case 'REMOVE_USER':
                    return {
                        ...prevState,
                        user: null,
                        project: null,
                    };
                case 'LOG_OUT':
                    return {
                        ...prevState,
                        isLogout: true,
                        user: null,
                        project: null,
                    };
            }
        },
        {
            isLoading: true,
            isLogout: false,
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
                const { user, token } = await LoginService(username, password)
                console.log(user.studentId);
                let project
                if (user) {
                    project = await ProjectService(user.studentId)
                }
                await Promise.all([
                    AsyncStorage.setItem('user', JSON.stringify(user)),
                    AsyncStorage.setItem('project', JSON.stringify(project))
                ])
                dispatch({ type: 'LOG_IN', user: user, project: project })
            },
            onLogout: async () => {
                await Promise.all([
                    AsyncStorage.removeItem('user'),
                    AsyncStorage.removeItem('project')
                ])
                dispatch({ type: 'LOG_OUT' })
            },
        }),
        []
    );

    return { auth, state }
}


const temp = {
    id: '1d4e6f46-7419-4530-b752-7991aa5c070f',
    username: 'bank1',
    role: 'student',
    studentId: 'B6070555',
    studentName: 'นัฐวุฒิn นาคขุนทด',
    avartar: null
}