import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Autocomplete from 'react-native-autocomplete-input';
import {Action, Ingredient, Operation} from '../../types';
import {Fonts, Colors} from '../../themes/styles';

export type FetchParams = {
  action: Action;
  queryParams: string | string[];
};

interface SearchProps {
  updateSelection: (ingrediont: Ingredient, operation: Operation) => void;
}

const Search = (props: SearchProps) => {
  const [fetchParams, setFetchParams] = useState<string | string[]>();
  const [fetchAction, setFetchAction] = useState<Action>(
    Action.INGREDIENT_AUTOCOMPLETE_SEARCH,
  );

  // For Filtered Data
  const [query, setQuery] = useState('');

  const {
    data: fetchedData,
    loading,
    error,
  } = useFetch(fetchAction, fetchParams);

  const updateSelection = (item: Ingredient, operation: Operation) => {
    props.updateSelection(item, operation);
    //clear the autocomplete
    setQuery(() => '');
  };

  useEffect(() => {
    if (query.length >= 3) {
      try {
        setFetchAction(Action.INGREDIENT_AUTOCOMPLETE_SEARCH);
        setFetchParams(query);
      } catch (e) {
        console.error(e);
      }
    }
  }, [query]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          clearButtonMode={'always'}
          defaultValue={query}
          keyboardType={'ascii-capable'}
          // style={{
          //   height: 40,
          // }}
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={fetchedData}
          inputContainerStyle={styles.inputContainer}
          listContainerStyle={styles.searchResults}
          onChangeText={text => setQuery(text)}
          placeholder="Enter an ingredient..."
          flatListProps={{
            keyboardShouldPersistTaps: 'always',
            keyExtractor: (item, i) => i.toString(),
            renderItem: ({item}) =>
              query.length > 2 ? (
                <TouchableOpacity
                  style={styles.searchItemContainer}
                  onPress={() => {
                    updateSelection(item, Operation.ADD_ITEM);
                  }}>
                  <Text style={styles.searchItem}>{item.name}</Text>
                </TouchableOpacity>
              ) : null,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_COLOR,
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 40,
  },
  inputContainer: {
    padding: 5,
    // marginVertical: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  autocompleteContainer: {},
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchItemContainer: {
    borderColor: Colors.BG_LIGHT,
    borderTopWidth: 1,
    padding: 5,
  },
  searchItem: {color: Colors.TEXT_DARK, fontSize: 16},
  itemText: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  ingredientsList: {
    alignItems: 'center',
  },
  searchResults: {
    width: '97%',
    alignSelf: 'center',
  },
});

export default Search;
