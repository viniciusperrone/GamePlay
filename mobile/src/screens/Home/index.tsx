import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Appointment from '../../components/Appointment';
import CategorySelected from '../../components/CategorySelected';
import ListDivider from '../../components/ListDivider';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import ListHeader from '../../components/ListHeader';

import { style } from './style';

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },

]

const Home: React.FC = () => {

  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <CategorySelected
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={style.content}>
          <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={style.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </>
  )
}

export default Home;