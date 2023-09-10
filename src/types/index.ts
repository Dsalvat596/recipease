export type MainStackParamList = {
  RecipeResults: {data: Array<Recipe>};
  RecipeDetails: {data: Recipe};
};

export type Ingredient = {
  id?: number;
  name: string;
  image: string;
  aisle?: string;
  amount?: number;
  original?: string;
  originalName?: string;
  extendedName?: string;
  unit?: string;
  unitLong?: string;
  unitShort?: string;
};

export enum Operation {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

export type Recipe = {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount?: number;
  missedIngredients?: Array<Ingredient>;
  title: string;
  unusedIngredients?: Array<Ingredient>;
  unusedIngredientCount?: number;
  usedIngredientCount?: number;
  usedIngredients?: Array<Ingredient>;
};

export enum Navigation {
  HomeScreen = 'HomeScreen',
  RecipeResults = 'RecipeResults',
  RecipeDetail = 'RecipeDetail',
}
