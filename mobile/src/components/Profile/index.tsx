import React from 'react';
import { View, Text } from 'react-native';

import { style } from './style';

const Profile: React.FC = () => {
    return (
        <View style={style.container}>
            <View>
                <View style={style.user}>
                    <Text style={style.greeting}>
                        Olá,
                    </Text>

                    <Text style={style.username}>
                        Vinicius
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