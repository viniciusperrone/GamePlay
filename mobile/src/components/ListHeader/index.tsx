import React from 'react';
import { View, Text } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './style';

type Props = {
    title: string;
    subtitle: string;
}

const ListHeader = ({ title, subtitle }: Props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                { title }
            </Text>

            <Text style={styles.subtitle}>
                { subtitle }
            </Text>
        </View>
    )
}

export default ListHeader;