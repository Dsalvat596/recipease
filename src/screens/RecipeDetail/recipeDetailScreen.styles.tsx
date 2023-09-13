import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.BG_LIGHT,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  recipeImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontSize: Fonts.FONT_SIZE_LARGE,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingStart: 6,
  },
  listItemLabel: {
    fontSize: Fonts.FONT_SIZE_LARGE,
    marginStart: 8,
  },
});

export default styles;
