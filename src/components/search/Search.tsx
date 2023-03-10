import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  Keyboard,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const Search = props => {
  // For Main Data
  const [data, setData] = useState([]);
  // For Filtered Data
  const [query, setQuery] = useState('');
  // For Selected Data
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const updateSelection = (item, operation) => {
    if (operation === ADD_ITEM) {
    } else {
    }
  };

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=e02ae539b1a1446ab147f445c019d23c&query=${query}&number=5`,
    );

    console.log('RESSSSS', res);

    setData(res.data);
  };

  console.log('DATA GOD DAMMIT', data);
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
          style={{
            height: 40,
          }}
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          listStyle={{maxHeight: 300}}
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
                    updateSelection(item, ADD_ITEM);
                  }}>
                  <Text style={styles.searchItem}>{item.name}</Text>
                </TouchableOpacity>
              ) : null,
          }}
        />

        <View style={styles.descriptionContainer}>
          {data.length > 0 ? (
            <>
              <Text style={styles.infoText}>Selected Data</Text>
              <Text style={styles.infoText}>
                {/* {JSON.stringify(selectedValue)} */}
              </Text>
            </>
          ) : (
            <Text style={styles.infoText}>Enter The Film Title</Text>
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
    // marginTop: 40,
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
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
  searchResults: {},
});

export default Search;
