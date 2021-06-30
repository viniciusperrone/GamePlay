import React from 'react';
import {
    View,
    Text, 
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';

const SignIn: React.FC = () => {

    const { loading, signIn } = useAuth();

    const navigation = useNavigation();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }
    return (
        <Background>
            <View style={styles.container}>

                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Organize {'\n'}
                        suas jogatinas {'\n'}
                        facilmente
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} />
                            : <ButtonIcon
                                title="Entrar com Discord"
                                onPress={handleSignIn}
                            />
                    }

                </View>
            </View>
        </Background>
    )
}

export default SignIn;