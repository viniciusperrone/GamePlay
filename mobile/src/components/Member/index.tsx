import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';

import Avatar from '../Avatar';

import { style } from './style';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}
type Props = {
    data: MemberProps
}

const Member = ({ data } : Props) => {

    const isOnline = data.status === 'online';

    const { on, primary } = theme.colors;
    return(
        <View style={style.container}>
            <Avatar 
                urlImage={ data.avatar_url }
            />
            <View>
                <Text style={style.title}>
                    { data.username }
                </Text>

                <View style={style.status}>

                    <View 
                        style={[
                            style.bulletStatus,
                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />
                    <Text style={style.nameStatus}>
                        { isOnline ? 'Disponível' : 'Ocupado'}
                    </Text>

                </View>
            </View>
        </View>
    )
}

export default Member;