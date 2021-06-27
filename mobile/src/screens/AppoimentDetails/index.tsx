import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { View, Text } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import Header from '../../components/Header';

import { theme } from '../../global/styles/theme';
import { style } from './style';

type Props = {
    title: string;
    action?: ReactNode;
}

const AppoimentDetails = ( )=> {

    return(
        <Background>
            <Header 
                title="Detalhes"
            />
        </Background>
    )
} 

export default AppoimentDetails;