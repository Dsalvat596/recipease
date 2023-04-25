import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';

const HomeScreen = () => {
  const {data, loading, error} = useFetch('');

  // console.log('ROIB???', data, loading, error);

  return (
    <View style={styles.container}>
      {loading && <Text>{'LOADING.......>~~~~~~~~'}</Text>}
      {!loading && <Search />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
