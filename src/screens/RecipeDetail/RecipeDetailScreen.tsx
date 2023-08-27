import React, {useState, useEffect, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {Action} from '../../components/search/Search';
import styles from './recipeDetailScreen.styles';
import {Recipe} from '../../types';

const RecipeDetailScreen: FC<Recipe> = ({recipe}) => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

export default RecipeDetailScreen;
