export type MainStackParamList = {
  Home: undefined;
  IngredientSearch: undefined;
  RecipeResults: {data: string};
  RecipeDetail: {data: Recipe[] | Recipe};
  ShoppingList: {data: Array<Ingredient>};
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
  used?: boolean;
};

export enum Operation {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

export enum Action {
  INGREDIENT_AUTOCOMPLETE_SEARCH = 'INGREDIENT_AUTOCOMPLETE_SEARCH',
  RECIPE_SEARCH = 'RECIPE_SEARCH',
  RECIPE_INSTRUCTIONS_FETCH = 'RECIPE_DETAILS_FETCH',
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
  Home = 'Home',
  IngredientSearch = 'IngredientSearch',
  RecipeResults = 'RecipeResults',
  RecipeDetail = 'RecipeDetail',
  ShoppingList = 'ShoppingList',
}
