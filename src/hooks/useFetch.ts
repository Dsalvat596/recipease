import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';
import {Action} from '../types';
// const BASE_URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${Config.API_KEY}&includeNutrition=true`;
// const DEFAULT_PARAMS = ``;

const AUTOCOMPLETE_INGREDIENT_AUTOCOMPLETE_BASE = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${Config.API_KEY}&query=`;
const GET_RECIPE_BY_INGREDIENTS_BASE = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${Config.API_KEY}&ingredients=`;

const useFetch = (action?: Action, queryParams?: string | string[] | null) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetchData = React.useCallback(async () => {
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
          setError(JSON.stringify(err));
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
      } else if (action === Action.RECIPE_INSTRUCTIONS_FETCH) {
        try {
          setLoading(true);
          const res = await axios.get(
            `https://api.spoonacular.com/recipes/${queryParams}/analyzedInstructions?apiKey=${Config.API_KEY}`,
          );
          setData(res.data);

          setLoading(false);
        } catch (err) {
          console.error(err);
          setError(JSON.stringify(err));
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
