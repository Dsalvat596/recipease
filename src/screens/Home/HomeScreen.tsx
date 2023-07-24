import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import {Action} from '../../components/search/Search';

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

  return (
    <View style={styles.container}>
      {loading && <Text>{'LOADING.......>~~~~~~~~'}</Text>}
      {!loading && <Search updateRecipeSearch={updateRecipeSearch} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
