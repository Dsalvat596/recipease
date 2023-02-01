import React from 'react';
import {View, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';

const HomeScreen = () => {
  const {data, loading, error} = useFetch(null);

  console.log('ROIB???', data, loading, error);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading && <Text>{'LOADING.......>~~~~~~~~'}</Text>}
      {!loading && <Text>{'Home Screen'}</Text>}
    </View>
  );
};

export default HomeScreen;
