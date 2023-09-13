import React, {useState, useEffect, FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';
import CardStack from '../../components/cards/stack/CardStack';
import {Action} from '../../components/search/Search';
import styles from './recipeDetailScreen.styles';
import {Ingredient, MainStackParamList, Recipe} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';

import CheckBox from '@react-native-community/checkbox';

interface FormattedIngredient extends Ingredient {
  used: boolean;
}

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

  const [ingredientList, setIngredientList] = useState<FormattedIngredient[]>(
    [],
  );

  const createIngredientList = () => {
    let newArr: Array<FormattedIngredient> = [];

    if (!!usedIngredients && usedIngredients.length > 0) {
      usedIngredients.forEach((ing: Ingredient) => {
        const usedObj = Object.assign({}, ing, {used: true});

        newArr.push(usedObj);
      });
    }
    if (!!missedIngredients && missedIngredients.length > 0) {
      missedIngredients.forEach((ing: Ingredient) => {
        const usedObj = Object.assign({}, ing, {used: false});

        newArr.push(usedObj);
      });
    }

    setIngredientList(newArr);
  };

  useEffect(() => {
    createIngredientList();
  }, []);

  const updateIngredientSelection = (
    ingredientToUpdate: FormattedIngredient,
    checked: boolean,
  ) => {
    const updatedIngredientList = [...ingredientList];

    const selectedIngredient = updatedIngredientList.find(
      ing => ing.id === ingredientToUpdate.id,
    );

    if (selectedIngredient) {
      selectedIngredient.used = checked;
    }

    setIngredientList(updatedIngredientList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.recipeImage} />
      </View>
      <Text style={styles.recipeTitle}>{title}</Text>
      <View style={styles.listContainer}>
        {ingredientList.map(ingredient => {
          return (
            <View style={styles.listItem} key={ingredient.id}>
              <CheckBox
                disabled={false}
                value={ingredient.used}
                onValueChange={val =>
                  updateIngredientSelection(ingredient, val)
                }
              />
              <Text style={styles.listItemLabel}>{ingredient.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RecipeDetailScreen;
