import React from 'react';
import { View, FlatList } from 'react-native';
import { GuildProps } from '../../components/Guild';

import Guild from '../../components/Guild';
import ListDivider from '../../components/ListDivider';

import { style } from './style';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

const Guilds = ({ handleGuildSelect }: Props) => {
    
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    }
  ];

  return (
    <View style={style.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}    
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={style.guilds}
      />
    </View>
  );

}

export default Guilds;