import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';

import {Ingredient, Operation} from '../../types';

const Search = props => {
  // For Main Data
  const [data, setData] = useState([]);
  // For Filtered Data
  const [query, setQuery] = useState('');
  // For Selected Data
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    [],
  );

  const updateSelection = (item: Ingredient, operation: Operation) => {
    if (operation === Operation.ADD_ITEM) {
      setSelectedIngredients(ings => [...ings, item]);
    } else {
    }
  };

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=e02ae539b1a1446ab147f445c019d23c&query=${query}&number=5`,
    );

    // console.log('RESSSSS', res);

    setData(res.data);
  };

  useEffect(() => {
    if (query.length >= 3) {
      try {
        fetchData();
      } catch (e) {
        console.error(e);
      }
    }
  }, [query]);

  //   const findFilm = query => {
  //     // Method called every time when we change the value of the input
  //     if (query) {
  //       // Making a case insensitive regular expression
  //       const regex = new RegExp(`${query.trim()}`, 'i');
  //       // Setting the filtered film array according the query
  //       setFilteredFilms(films.filter(film => film.title.search(regex) >= 0));
  //     } else {
  //       // If the query is null then  return blank
  //       setFilteredFilms([]);
  //     }
  //   };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          clearButtonMode={'always'}
          //   defaultValue={defaultText}
          keyboardType={'ascii-capable'}
          // style={{
          //   height: 40,
          // }}
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          // listStyle={{maxHeight: 300}}
          data={data}
          inputContainerStyle={styles.autocompleteContainer}
          listContainerStyle={styles.searchResults}
          onChangeText={text => setQuery(text)}
          placeholder="Enter an ingredient..."
          flatListProps={{
            keyboardShouldPersistTaps: 'always',
            keyExtractor: (item, i) => i.toString(),
            renderItem: ({item}) =>
              query.length > 2 ? (
                <TouchableOpacity
                  onPress={() => {
                    updateSelection(item, Operation.ADD_ITEM);
                  }}>
                  <Text style={styles.searchItem}>{item.name}</Text>
                </TouchableOpacity>
              ) : null,
          }}
        />

        <View style={styles.descriptionContainer}>
          {selectedIngredients.length > 0 ? (
            <>
              <Text style={styles.infoText}>Selected Data</Text>
              <View style={styles.ingredientsList}>
                {selectedIngredients.map(item => (
                  <TouchableOpacity style={styles.ingredientsListItem}>
                    <Text style={styles.ingredientText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : (
            <Text style={styles.infoText}>What Ingredients Do You Have?</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingHorizontal: 18,
    marginTop: 40,
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchItem: {color: '#h3h3h3'},
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  ingredientsList: {
    alignItems: 'center',
  },
  ingredientsListItem: {
    backgroundColor: '#136c72',
    marginVertical: 5,
    padding: 10,
    width: '70%',
    borderRadius: 25,
  },
  ingredientText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#h3h3h3',
  },
  searchResults: {},
});

export default Search;
