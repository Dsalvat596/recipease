import React, {useState, useEffect, useCallback, FC} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import styles from './recipeDetailScreen.styles';
import {
  FormattedIngredient,
  Ingredient,
  MainStackParamList,
  Recipe,
  Navigation,
} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import Checkbox from '../../components/checkbox/Checkbox';

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
      <ScrollView style={styles.listContainer}>
        {ingredientList.map(ingredient => (
          <View style={styles.listItem} key={ingredient.id}>
            <Checkbox
              item={ingredient}
              onToggle={updateIngredientSelection}
              key={ingredient.id}
            />
            <Text style={styles.listItemLabel}>
              {ingredient.name}
              <Text>{` ${ingredient.amount} ${ingredient.unit}`}</Text>
            </Text>
          </View>
        ))}
        <View style={{backgroundColor: 'green'}}>
          <Button
            title="Make a Shopping List"
            onPress={() =>
              navigation.navigate(Navigation.ShoppingList, {
                data: ingredientList,
              })
            }
          />
        </View>
      </ScrollView>

      <View style={{backgroundColor: 'yellow'}}>
        <Button title="Get the Recipe" />
      </View>
    </View>
  );
};

export default RecipeDetailScreen;
