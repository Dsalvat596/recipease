import React from 'react';
import {View, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Search from '../../components/search';

const HomeScreen = () => {
  const {data, loading, error} = useFetch(null);

  console.log('ROIB???', data, loading, error);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {loading && <Text>{'LOADING.......>~~~~~~~~'}</Text>}
      {!loading && <Search />}
    </View>
  );
};

export default HomeScreen;
