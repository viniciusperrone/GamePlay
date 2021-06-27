import React from 'react';
import { ScrollView } from 'react-native';

import Category from '../Category';

import { styles } from './style';
import { categories } from '../../utils/categories';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
    
} 
const CategorySelected = ({ 
    categorySelected, 
    setCategory,
    hasCheckBox = false,
  }: Props) => {
    
    return(
      <ScrollView
        horizontal
        style={styles.container}  
        showsHorizontalScrollIndicator={false}  
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {
          categories.map(category => (
            <Category 
              key={category.id}
              title={category.title}
              icon={category.icon}
              checked={category.id === categorySelected}
              onPress={() => setCategory(category.id)}
              hasCheckBox={hasCheckBox}
            />
          ))
        }
      </ScrollView>
    );
}

export default CategorySelected;