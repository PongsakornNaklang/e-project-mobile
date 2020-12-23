import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @param {string} key The index of data
 * @param {string|object} value Your data that you want to set
 */
export const setStorageData = async (key, value) => {
    try {
        if (typeof value === 'string') {
            await AsyncStorage.setItem(key, value)
        } else if (typeof value === 'object') {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }
    } catch (e) {
        
    }
}

/**
 * @param {string} key The index of data
 * @returns {string|null} If the error will return is null
 */
export const getStorageData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null){
            if(typeof value === 'string'){
                return value
            }else if(typeof value === 'object'){
                return JSON.parse(value)
            }
        }else{
            return null
        }
    } catch (e) {
        return null
    }
}