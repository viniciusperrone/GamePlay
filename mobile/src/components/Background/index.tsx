import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

import { style } from './style';

type Props = {
    children: ReactNode;
}

const Background = ({ children }: Props) => {

    const { secondary80, secondary100 } = theme.colors;

    return(
        <LinearGradient
            style={style.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
}

export default Background;