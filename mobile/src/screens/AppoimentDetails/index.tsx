import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ImageBackground, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

import BannerImg from '../../assets/banner.png'
import { Background } from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import { theme } from '../../global/styles/theme';
import { style } from './style';

type Props = {
    title: string;
    action?: ReactNode;
}

const AppoimentDetails = () => {

    const members = [
        {
            id: '1',
            username: 'Vinicius',
            avatar_url: 'https://github.com/viniciusperrone.png',
            status: 'online'
        },
        {
            id: '1',
            username: 'Player01',
            avatar_url: 'https://github.com/eduardasilva.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={style.banner}
            >
                <View style={style.bannerContent}>
                    <Text style={style.title}>
                        Lendários
                    </Text>

                    <Text style={style.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member
                        data={item}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={style.members}
            />
            <View  style={style.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}

export default AppoimentDetails;