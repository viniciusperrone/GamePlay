import React, { useState } from 'react';
import { View } from 'react-native';

import CategorySelected from '../../components/CategorySelected';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';

import { style } from './style';

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
                
            </View>
        </>
    )
}

export default Home;