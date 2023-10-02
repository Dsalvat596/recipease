import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {mockRecipeData} from '../../data';
import {Action, MainStackParamList, Recipe} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Colors} from '../../themes/styles';

const RecipeResultsScreen: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
  route,
}) => {
  const {
    data: fetchedData,
    loading,
    error,
  } = useFetch(Action.RECIPE_SEARCH, route.params.data);

  return (
    <View style={styles.container}>
      {loading && <LoadingSpinner color={Colors.PRIMARY_COLOR} />}
      {!loading && !!fetchedData && fetchedData.length > 0 && (
        <CardStack data={fetchedData} />
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

export default RecipeResultsScreen;
