import React from 'react';
import { View } from 'react-native';

import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';

import { style } from './style';

const Home: React.FC = () => {
    return(
        <>  
            <View style={style.container}>
                <View style={style.header}>
                    <Profile />
                    <ButtonAdd />
                </View>
            </View>
        </>
    )
}

export default Home;