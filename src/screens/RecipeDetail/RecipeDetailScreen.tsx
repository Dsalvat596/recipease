import React, {useState, useEffect, FC} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './recipeDetailScreen.styles';
import {Ingredient, MainStackParamList, Navigation, Action} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import Checkbox from '../../components/checkbox/Checkbox';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import {Colors} from '../../themes/styles';
import useFetch from '../../hooks/useFetch';

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
  } = route.params?.data;

  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [recipeID, setRecipeID] = useState<string | null>(null);

  const createIngredientList = () => {
    let newArr: Array<Ingredient> = [];

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

  const {
    data: recipeInstructions,
    loading,
    error,
  } = useFetch(Action.RECIPE_INSTRUCTIONS_FETCH, recipeID);

  useEffect(() => {
    createIngredientList();
  }, []);

  const updateIngredientSelection = (
    ingredientToUpdate: Ingredient,
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
    <SafeAreaView style={styles.container}>
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
          <Text>{'Missing Ingredient(s)?'}</Text>
          <Button
            title="Make a Shopping List"
            onPress={() =>
              navigation.navigate(Navigation.ShoppingList, {
                data: ingredientList.filter(item => item.used === false),
              })
            }
          />
        </View>
      </ScrollView>
      <ScrollView>
        {recipeInstructions &&
          recipeInstructions.length > 0 &&
          !loading &&
          recipeInstructions[0].steps.map(step => (
            <View key={step.number}>
              <Text>
                {step.number}
                {': '}
              </Text>
              <Text>{step.step}</Text>
            </View>
          ))}
        {!!loading && <LoadingSpinner color={Colors.PRIMARY_COLOR} />}
        {recipeInstructions.length < 1 && !loading && (
          <Button title="Get the Recipe" onPress={() => setRecipeID(id)} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;
