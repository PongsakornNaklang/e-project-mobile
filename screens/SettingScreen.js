import React from 'react'
import { View } from 'react-native'
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
	CheckRow
} from 'react-native-settings-page';

export const SettingScreen = () => {
    return (
        <ReactNativeSettingsPage>
            <SectionRow text='โปรไฟล์'>
                <NavigateRow
                    text='ข้อมูลส่วนตัว'
                    
                />
            </SectionRow>
        </ReactNativeSettingsPage>
    )
}
