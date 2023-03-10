import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const BASE_URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=e02ae539b1a1446ab147f445c019d23c&includeNutrition=true`;
const DEFAULT_PARAMS = ``;

const AUTOCOMPLETE_INGREDIENT_AUTOCOMPLETE_BASE = `https://api.spoonacular.com/food/ingredients/autocomplete`;

const useFetch = params => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    if (!params) {
      setLoading(true);

      try {
        const res = await axios.get(`${BASE_URL}${DEFAULT_PARAMS}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error('OI THERES AN ERROR!!!!', err);
        setLoading(false);
        setError(JSON.stringify(err));
      }
    } else {
      try {
        const res = await axios.get(`${BASE_URL}${params}`);
        // console.log('ELSE RES???', res.data);
      } catch (err) {
        console.error(err);
        // setError(err.message);
      }
    }
  }, [params]);

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
