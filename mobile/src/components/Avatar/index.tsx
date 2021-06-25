import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image} from 'react-native';

import { style } from './style';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string;
}

const Avatar = ({ urlImage } : Props) => {

    const { secondary80, secondary100} = theme.colors;
    return (
        <LinearGradient 
            style={style.container}
            colors={[secondary80, secondary100]}    
        >
            <Image 
                source={{ uri: urlImage }}
                style={style.avatar}
            />
        </LinearGradient>

    )
}

export default Avatar;