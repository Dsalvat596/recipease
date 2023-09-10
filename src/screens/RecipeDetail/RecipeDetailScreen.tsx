import React, {useState, useEffect, FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {Action} from '../../components/search/Search';
import styles from './recipeDetailScreen.styles';
import {MainStackParamList, Recipe} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';

const RecipeDetailScreen: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
  route,
}) => {
  const {
    id,
    image,
    imageType,
    likes,
    missedIngredients,
    title,
    unusedIngredients,
    usedIngredients,
  } = route.params.data;
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{title}</Text>
    </View>
  );
};

export default RecipeDetailScreen;
