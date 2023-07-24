import {Ingredient} from '../types';

export const formatIngredientsQueryString = (
  ingredients: Array<Ingredient>,
) => {
  let queryStr = '';

  for (let i = 0; i < ingredients.length; i++) {
    i >= 1
      ? (queryStr = queryStr + `+${ingredients[i].name}`)
      : (queryStr = queryStr + `${ingredients[i].name}`);
  }

  return queryStr;
};
