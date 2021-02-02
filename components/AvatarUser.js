import React from 'react'
import { Avatar } from 'react-native-paper'
import { app_config } from '../config/app_config'

export const AvatarUser = ({ name = " ", avatar = null }) => {
    const [fname, lname] = String(name).split(" ")

    if (avatar != null) {
        return <Avatar.Image size={50} source={{ uri: `${app_config.api}/public/profile/${avatar}` }} />
    } else {
        return <Avatar.Text size={50} label={fname[0] + lname[0]} labelStyle={{ fontSize: 14 }} style={{ backgroundColor: '#bdbdbd' }} />
    }

}
