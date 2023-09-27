import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import styles from './shoppingList.styles';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../types';
import Expandable from '../../components/expandable';
import {SafeAreaView} from 'react-native-safe-area-context';

const ShoppingList: FC<StackScreenProps<MainStackParamList>> = ({
  navigation,
  route,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={route.params.data}
          renderItem={data => {
            return <Expandable data={data.item} />;
          }}
          keyExtractor={({id}) => id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingList;
