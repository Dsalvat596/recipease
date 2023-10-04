import React, {useState, useEffect, FC, Fragment} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Search from '../../components/search';
import {StackScreenProps} from '@react-navigation/stack';

// import {mockRecipeData} from '../../data';
import {
  MainStackParamList,
  Navigation,
  Ingredient,
  Operation,
} from '../../types';
import {Colors, Fonts} from '../../themes/styles';
import {formatIngredientsQueryString} from '../../helpers';

const IngredientSearchScreen: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
}) => {
  const [recipeQuery, setRecipeQuery] = useState<string>('');
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    [],
  );

  // const dummyDataForNow: Array<Recipe> = mockRecipeData;

  useEffect(() => {
    const recipeStr = formatIngredientsQueryString(selectedIngredients);

    setRecipeQuery(() => recipeStr);
  }, [selectedIngredients]);

  const getRecipes = () => {
    if (!!recipeQuery && recipeQuery.length > 0) {
      navigation.navigate(Navigation.RecipeResults, {data: recipeQuery});
    }
  };

  const updateSelection = (item: Ingredient, operation: Operation) => {
    if (operation === Operation.ADD_ITEM) {
      if (
        selectedIngredients.some((ing: Ingredient) => ing.name === item.name)
      ) {
        console.log('YOU ALREADY ADDED THAT ITEM, MORON!');
        return;
      } else {
        setSelectedIngredients(ings => [...ings, item]);
      }
    } else {
      if (operation === Operation.DELETE_ITEM) {
        setSelectedIngredients(prev =>
          prev.filter(existingItem => existingItem.name !== item.name),
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Search updateSelection={updateSelection} />
      <View style={styles.descriptionContainer}>
        {selectedIngredients.length > 0 ? (
          <>
            <Text style={styles.infoText}>Selected Data</Text>
            <View style={styles.ingredientsList}>
              {selectedIngredients.map((item, idx) => (
                <View key={`item+${idx}`} style={styles.ingredientsListItem}>
                  <Text style={{width: 20}}>{''}</Text>
                  <Text style={styles.ingredientText}>{item.name}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      updateSelection(item, Operation.DELETE_ITEM)
                    }>
                    <Text style={styles.removeBtn}>{'x'}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => getRecipes()}>
                <Text style={styles.actionText}>{`FIND RECIPES`}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text style={styles.infoText}>What Ingredients Do You Have?</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchItem: {color: Colors.TEXT_DARK},
  itemText: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  ingredientsList: {
    alignItems: 'center',
  },
  removeBtn: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.FONT_SIZE_LARGE,
    width: 20,
    textAlign: 'center',
  },
  ingredientsListItem: {
    backgroundColor: Colors.PRIMARY_COLOR,
    marginVertical: 5,
    padding: 10,
    width: '70%',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientText: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    color: Colors.TEXT_LIGHT,
  },
  actionButton: {
    backgroundColor: Colors.ACTION_COLOR,
    padding: 15,
    marginVertical: 8,
    width: '70%',
    borderRadius: 25,
    alignSelf: 'center',
  },
  actionText: {
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE_LARGE,
    fontWeight: Fonts.FONT_WEIGHT_HEAVY,
    color: Colors.TEXT_LIGHT,
  },
  infoText: {
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    color: Colors.TEXT_DARK,
  },
  searchResults: {},
});

export default IngredientSearchScreen;
