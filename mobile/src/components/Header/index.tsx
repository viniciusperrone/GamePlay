import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { View, Text } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?: ReactNode;
}

const Header = ({ title, action } : Props) => {

    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    return(
        <LinearGradient
            style={style.container}
            colors={[secondary100, secondary40]}
        >   
            <BorderlessButton
                onPress={handleGoBack}
            >
                <Feather 
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={style.title}>
                { title }
            </Text>

            {
                action && 
                <View>
                    { action }
                </View>
            }
        </LinearGradient>
    )
} 

export default Header;