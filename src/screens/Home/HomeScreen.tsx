import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {Action} from '../../components/search/Search';
import {mockRecipeData} from '../../data';
import {Recipe} from '../../types';

const HomeScreen = () => {
  const [recipeQuery, setRecipeQuery] = useState<string>('');

  const updateRecipeSearch = (queryString: string) => {
    setRecipeQuery(queryString);
  };

  const {
    data: fetchedData,
    loading,
    error,
  } = useFetch(Action.RECIPE_SEARCH, recipeQuery);

  const dummyDataForNow: Array<Recipe> = mockRecipeData;

  return (
    <View style={styles.container}>
      {loading && <Text>{'LOADING.......>~~~~~~~~'}</Text>}
      {/* {!loading && !recipeQuery && (
        <Search updateRecipeSearch={updateRecipeSearch} />
      )} */}
      {/* {!loading && !!recipeQuery && fetchedData && fetchedData.length > 0 && (
        <CardStack data={fetchedData} />
      )} */}
      {!loading && dummyDataForNow && dummyDataForNow.length > 0 && (
        <CardStack data={dummyDataForNow} />
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

export default HomeScreen;
