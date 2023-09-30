import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IngredientSearchScreen from './IngredientSearch';
import RecipeResultsScreen from './RecipeResults/RecipeResultsScreen';
import RecipeDetailScreen from './RecipeDetail/RecipeDetailScreen';
import ShoppingList from './ShoppingList/ShoppingList';
import HomeScreen from './Home/HomeScreen';

const Stack = createNativeStackNavigator();

const Router: FC = () => {
  const renderStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name="IngredientsSearch"
          component={IngredientSearchScreen}
          options={{
            headerTitle: 'What You Got?',
            headerBackTitle: '',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="RecipeResults"
          component={RecipeResultsScreen}
          options={{
            headerBackButtonMenuEnabled: true,
          }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{
            headerBackButtonMenuEnabled: true,
          }}
        />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{
            headerBackButtonMenuEnabled: true,
          }}
        />
      </Stack.Navigator>
    );
  };
  return renderStack();
};

export default Router;
