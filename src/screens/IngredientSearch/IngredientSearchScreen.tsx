import React, {useState, useEffect, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {StackScreenProps} from '@react-navigation/stack';

import {mockRecipeData} from '../../data';
import {Recipe, MainStackParamList, Navigation, Action} from '../../types';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Colors} from '../../themes/styles';

const IngredientSearchScreen: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
}) => {
  const [recipeQuery, setRecipeQuery] = useState<string>('');

  // const dummyDataForNow: Array<Recipe> = mockRecipeData;

  const updateRecipeSearch = (queryString: string) => {
    setRecipeQuery(() => queryString);
  };

  useEffect(() => {
    if (!!recipeQuery && recipeQuery.length > 0) {
      navigation.navigate(Navigation.RecipeResults, {data: recipeQuery});
    }
  }, [recipeQuery, navigation]);

  return (
    <View style={styles.container}>
      <Search updateRecipeSearch={updateRecipeSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default IngredientSearchScreen;
