import React, {useState, useEffect, useRef, FC} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import styles from './homeScreen.styles';

import LottieView from 'lottie-react-native';
import CustomBtn from '../../components/button/CustomBtn';
import {Colors} from '../../themes/styles';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList, Navigation} from '../../types';

const HomeScreen: FC<StackScreenProps<MainStackParamList>> = ({
  route,
  navigation,
}) => {
  const animationRef = useRef<LottieView>(null);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  useEffect(() => {
    animationFinished &&
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
  }, [animationFinished, fadeAnim]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!animationFinished && (
          <LottieView
            source={require('../../../assets/images/splash.lottie')}
            //   imageAssetsFolder='' this is for android
            autoPlay
            onAnimationFinish={() => setAnimationFinished(true)}
            loop={false}
            speed={0.5}
            style={styles.animation}
          />
        )}
        <Animated.View style={{opacity: fadeAnim}}>
          <CustomBtn
            title={'Start'}
            btnColor={'red'}
            outlined
            small
            onPress={() => navigation.navigate(Navigation.IngredientSearch)}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default HomeScreen;
