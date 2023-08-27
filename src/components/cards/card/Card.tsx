import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {Recipe} from '../../../types';
import {Fonts, Colors} from '../../../themes/styles';
import {Button} from 'react-native-elements';

interface CardProps {
  data: Recipe;
}

const Card: FC<CardProps> = ({data}) => {
  const {
    id,
    image,
    imageType,
    likes,
    title,
    missedIngredients,
    unusedIngredients,
  } = data;

  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.cardImage} />
      <Text style={styles.recipeTitle}>{title}</Text>
      <Button title={'Go to Recipe'} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  cardImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  recipeTitle: {
    fontSize: Fonts.FONT_SIZE_LARGE,
  },
});

export default Card;
