import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    // backgroundColor: 'purple',
    bottom: 25,
    fontFamily: Fonts.FONT_FAMILY_LIGHT,
  },
  animation: {
    height: 250,
    width: 250,
  },
});

export default styles;
