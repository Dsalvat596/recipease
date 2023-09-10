import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes/styles';

const styles = StyleSheet.create({
  container: {
    flex: 0.42,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.BG_LIGHT,
  },
  recipeImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  recipeTitle: {
    fontSize: Fonts.FONT_SIZE_LARGE,
  },
});

export default styles;
