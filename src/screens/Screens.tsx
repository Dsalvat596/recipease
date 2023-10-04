import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IngredientSearchScreen from './IngredientSearch';
import RecipeResultsScreen from './RecipeResults/RecipeResultsScreen';
import RecipeDetailScreen from './RecipeDetail/RecipeDetailScreen';
import ShoppingList from './ShoppingList/ShoppingList';
import HomeScreen from './Home/HomeScreen';
import {MainStackParamList, Navigation} from '../types/index';

const Stack = createNativeStackNavigator<MainStackParamList>();

const Router: FC = () => {
  const renderStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={Navigation.Home}
          component={HomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name={Navigation.IngredientSearch}
          component={IngredientSearchScreen}
          options={{
            headerTitle: 'What You Got?',
            headerBackTitle: '',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={Navigation.RecipeResults}
          component={RecipeResultsScreen}
          options={{
            headerBackButtonMenuEnabled: true,
          }}
        />
        <Stack.Screen
          name={Navigation.RecipeDetail}
          component={RecipeDetailScreen}
          options={{
            headerBackButtonMenuEnabled: true,
          }}
        />
        <Stack.Screen
          name={Navigation.ShoppingList}
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
