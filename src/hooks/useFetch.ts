import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${Config.API_KEY}&includeNutrition=true`;
const DEFAULT_PARAMS = ``;

const AUTOCOMPLETE_INGREDIENT_AUTOCOMPLETE_BASE = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${Config.API_KEY}&query=`;
const GET_RECIPE_BY_INGREDIENTS_BASE = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${Config.API_KEY}&ingredients=`;

enum Action {
  INGREDIENT_AUTOCOMPLETE_SEARCH = 'INGREDIENT_AUTOCOMPLETE_SEARCH',
  RECIPE_SEARCH = 'RECIPE_SEARCH',
}

const useFetch = (action?: Action, queryParams?: string | string[]) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    if (!queryParams) {
      // setLoading(true);

      // try {
      //   const res = await axios.get(`${BASE_URL}${DEFAULT_PARAMS}`);
      //   setData(res.data);
      //   setLoading(false);
      // } catch (err) {
      //   console.error('OI THERES AN ERROR!!!!', err);
      //   setLoading(false);
      //   setError(JSON.stringify(err));
      // }
      return;
    } else {
      if (action === Action.INGREDIENT_AUTOCOMPLETE_SEARCH) {
        try {
          const res = await axios.get(
            `${AUTOCOMPLETE_INGREDIENT_AUTOCOMPLETE_BASE}${queryParams}&number=6`,
          );
          setData(res.data);
        } catch (err) {
          console.error(err);
          // setError(err.message);
        }
      } else if (action === Action.RECIPE_SEARCH) {
        if (queryParams.length > 0) {
          setLoading(true);
          try {
            const res = await axios.get(
              `${GET_RECIPE_BY_INGREDIENTS_BASE}${queryParams}&number=5&ranking=1`,
            );

            setData(res.data);
            setLoading(false);
          } catch (err) {
            console.error('OI THERES AN ERROR!!!!', err);
            setLoading(false);
            setError(JSON.stringify(err));
          }
        }
      }
    }
  }, [action, queryParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {data, loading, error};
};

export default useFetch;
