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

  const dummyDataForNow: Array<Recipe> = mockRecipeData;

  const {
    data: fetchedData,
    loading,
    error,
  } = useFetch(Action.RECIPE_SEARCH, recipeQuery);

  const updateRecipeSearch = (queryString: string) => {
    setRecipeQuery(() => queryString);
  };

  useEffect(() => {
    if (!loading && !!recipeQuery && fetchedData && fetchedData.length > 0) {
      navigation.navigate(Navigation.RecipeResults, {data: fetchedData});
    }
  }, [recipeQuery, fetchedData, loading]);

  return (
    <View style={styles.container}>
      {loading && <LoadingSpinner color={Colors.PRIMARY_COLOR} />}
      {!loading && !recipeQuery && (
        <Search updateRecipeSearch={updateRecipeSearch} />
      )}
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
