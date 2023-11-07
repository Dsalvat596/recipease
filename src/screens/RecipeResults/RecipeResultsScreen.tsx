import React, {FC, useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {mockRecipeData} from '../../data';
import {Action, MainStackParamList, Recipe} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Colors, Fonts} from '../../themes/styles';
import LottieView from 'lottie-react-native';
import Slider from '../../components/slider';

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
    <SafeAreaView
      style={
        loading || (!loading && fetchedData.length === 0)
          ? styles.container
          : styles.containerCardStack
      }>
      {loading && <LoadingSpinner color={Colors.PRIMARY_COLOR} />}
      {!loading && fetchedData.length === 0 && (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>
            {"Sorry, we didn't a recipe with the ingredients you requested"}
          </Text>
          <LottieView
            source={require('../../../assets/images/notFound.lottie')}
            //   imageAssetsFolder='' this is for android
            autoPlay
            // onAnimationFinish={() => setAnimationFinished(true)}
            loop={true}
            speed={0.5}
            style={styles.animation}
          />
          <Text style={styles.notFoundText}>
            {'Please go back and try again'}
          </Text>
        </View>
      )}
      {!loading && !!fetchedData && fetchedData.length > 0 && (
        // <CardStack data={fetchedData} />
        <Slider data={fetchedData} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCardStack: {flex: 1},
  animation: {
    height: 250,
    width: 250,
  },
  notFoundContainer: {
    maxWidth: '75%',
    alignItems: 'center',
  },
  notFoundText: {
    textAlign: 'center',
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
  },
});

export default RecipeResultsScreen;
