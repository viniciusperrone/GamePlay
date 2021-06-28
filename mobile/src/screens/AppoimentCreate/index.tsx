import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
    Text,
    View,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

import { GuildProps } from '../../components/Appointment';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Header from '../../components/Header';
import CategorySelected from '../../components/CategorySelected';
import GuildIcon from '../../components/GuildIcon';
import { theme } from '../../global/styles/theme';
import { style } from './style';
import SmallInput from '../../components/SmallInput';

import Guilds from '../Guilds';


const AppoimentCreate = () => {

    const [category, setCategory] = useState('');
    const [openGuildsModa, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
      }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
            style={style.container}
        >
            <ScrollView>
                <Header
                    title="Agendar Partida"
                />

                <Text style={[style.label, {
                    marginLeft: 24,
                    marginTop: 36,
                    marginBottom: 18
                }]}>
                    Categoria
                </Text>

                <CategorySelected
                    hasCheckBox
                    setCategory={handleCategorySelect}
                    categorySelected={category}

                />

                <View style={style.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        <View style={style.select}>
                            {
                                guild.icon ? <GuildIcon /> : <View style={style.image}/>
                            }
                            <View style={style.selectBody}>
                                <Text style={style.label}>
                                    { guild.name ? guild.name : 'Selecione um servidor' }
                                </Text>
                            </View>

                            <Feather
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                            />
                        </View>
                    </RectButton>

                    <View style={style.field}>
                        <View>
                            <Text style={style.label}>
                                Dia e mês
                            </Text>

                            <View style={style.column}>
                                <SmallInput maxLength={2} />
                                <Text style={style.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>


                        <View>
                            <Text style={[style.label,{
                                marginBottom: 12
                            }]}>
                                Hora e minuto
                            </Text>

                            <View style={style.column}>
                                <SmallInput maxLength={2} />
                                <Text style={style.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>
                    </View>

                    <View style={[style.field, { marginBottom: 12 }]}>
                        <Text style={[style.label,{
                                marginBottom: 12
                            }]}>
                            Descrição
                        </Text>

                        <Text style={style.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={style.footer}>
                        <Button title="Agendar" />
                    </View>
                </View>
            </ScrollView>

            <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>

        </KeyboardAvoidingView>
    )
}

export default AppoimentCreate;

// Background