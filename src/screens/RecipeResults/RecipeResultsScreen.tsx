import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {Action} from '../../components/search/Search';
import {mockRecipeData} from '../../data';
import {MainStackParamList, Recipe} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';

const RecipeResultsScreen: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.container}>
      <CardStack data={route.params.data} />
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
