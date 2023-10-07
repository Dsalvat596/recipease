import React, {useState, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../card';
import Swiper from 'react-native-deck-swiper';
import {Recipe} from '../../../types';

const colors = {
  red: '#ec2379',
  blue: '#0070ff',
  gray: '#777777',
  black: '#000000',
  white: '#ffffff',
};

interface CardStackProps {
  data: Array<Recipe>;
}

const CardStack: FC<CardStackProps> = props => {
  const [index, setIndex] = useState<number>(0);

  const onSwiped = (idx: number) => {
    setIndex(idx + 1);
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={props.data}
        cardIndex={index}
        renderCard={card => <Card data={card} />}
        onSwiped={onSwiped}
        keyExtractor={item => {
          return item.id.toString();
        }}
        stackSize={props.data.length}
        stackScale={10}
        infinite={true}
        verticalSwipe={false}
        stackSeparation={14}
        disableTopSwipe={true}
        disableBottomSwipe={true}
        animateCardOpacity={false}
        disableLeftSwipe={true}
        // overlayLabels={{
        //   left: {
        //     title: 'NOPE',
        //     style: {
        //       label: {
        //         backgroundColor: colors.red,
        //         color: colors.white,
        //         fontSize: 24,
        //       },
        //       wrapper: {
        //         flexDirection: 'column',
        //         alignItems: 'flex-end',
        //         justifyContent: 'flex-start',
        //         margingTop: 20,
        //         marginLeft: -20,
        //       },
        //     },
        //   },
        //   right: {
        //     title: 'YES',
        //     style: {
        //       label: {
        //         backgroundColor: colors.blue,
        //         color: colors.white,
        //         fontSize: 24,
        //       },
        //       wrapper: {
        //         flexDirection: 'column',
        //         alignItems: 'flex-start',
        //         justifyContent: 'flex-start',
        //         margingTop: 20,
        //         marginLeft: 20,
        //       },
        //     },
        //   },
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardStack;
