import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Fonts} from '../../themes/styles';

const {width, height} = Dimensions.get('screen');

const slideItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default slideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {width: '100%', flex: 0.6},
  content: {alignItems: 'center', flex: 0.4},
  title: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    fontFamily: Fonts.FONT_FAMILY_BOLD,
  },
});
