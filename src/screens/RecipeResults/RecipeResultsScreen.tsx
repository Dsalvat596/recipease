import React, {FC, useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {mockRecipeData} from '../../data';
import {Action, MainStackParamList, Recipe} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Colors} from '../../themes/styles';
import LottieView from 'lottie-react-native';

const RecipeResultsScreen: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
  route,
}) => {
  const {
    data: fetchedData,
    loading,
    error,
  } = useFetch(Action.RECIPE_SEARCH, route.params?.data);

  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (fetchedData.length === 0) {
      animationRef.current?.play();
    }
  }, [fetchedData.length]);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingSpinner color={Colors.PRIMARY_COLOR} />}
      {!loading && fetchedData.length === 0 && (
        <LottieView
          source={require('../../../assets/images/notFound.lottie')}
          //   imageAssetsFolder='' this is for android
          autoPlay
          // onAnimationFinish={() => setAnimationFinished(true)}
          loop={true}
          speed={0.5}
          style={styles.animation}
        />
      )}
      {!loading && !!fetchedData && fetchedData.length > 0 && (
        <CardStack data={fetchedData} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  animation: {
    height: 250,
    width: 250,
  },
});

export default RecipeResultsScreen;
