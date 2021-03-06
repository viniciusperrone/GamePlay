import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import Avatar from '../Avatar';

import { style } from './style';

const Profile: React.FC = () => {

    const { user } = useAuth();
    console.log(user);
    
    return (
        <View style={style.container}>
            
            <Avatar 
                urlImage={user.avatar}
            />
            <View>
                <View style={style.user}>
                    <Text style={style.greeting}>
                        Olá,
                    </Text>

                    <Text style={style.username}>
                        { user.firstName }
                    </Text>
                </View>

                <Text style={style.message}>
                    Hoje é o dia da vitória
                </Text>
            </View>
        </View>

    )
}

export default Profile;