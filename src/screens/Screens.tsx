import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Home';
import RecipeResultsScreen from './RecipeResults/RecipeResultsScreen';
import RecipeDetailScreen from './RecipeDetail/RecipeDetailScreen';
import ShoppingList from './ShoppingList/ShoppingList';

const Stack = createNativeStackNavigator();

const Router: FC = () => {
  const renderStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={HomeScreen}
          options={{
            headerTitle: 'RECIPEZ',
            headerBackButtonMenuEnabled: true,
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
