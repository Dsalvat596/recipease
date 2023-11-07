import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef, FC} from 'react';
import {mockRecipeData} from '../../data';
import SlideItem from '../slideItem';
import Pagination from '../pagination';
import {Recipe} from '../../types';

type SliderProps = {
  data: Recipe[];
};

const Slider: FC<SliderProps> = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState<number>(0);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({itemVisiblePercentThreshold: 50}).current;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Slider;
