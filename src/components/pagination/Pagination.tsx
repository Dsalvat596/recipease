import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../themes/styles';
import {Recipe} from '../../types';

const {width} = Dimensions.get('screen');

interface PaginationProps {
  data: Recipe[];
  scrollX: Animated.Value;
  index: number;
}

const Pagination: FC<PaginationProps> = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((item, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={item.id}
            style={[
              styles.dot,
              {width: dotWidth},
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.PRIMARY_COLOR_LIGHT,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: Colors.PRIMARY_COLOR,
  },
});
