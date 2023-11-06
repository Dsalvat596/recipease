import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchItem: {color: Colors.TEXT_DARK},
  itemText: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  ingredientsList: {
    alignItems: 'center',
  },
  removeBtn: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.FONT_SIZE_LARGE,
    width: 20,
    textAlign: 'center',
  },
  ingredientsListItem: {
    backgroundColor: Colors.PRIMARY_COLOR,
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    marginVertical: 5,
    padding: 10,
    width: '70%',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientText: {
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    color: Colors.TEXT_LIGHT,
  },
  actionButton: {
    backgroundColor: Colors.ACTION_COLOR,
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    padding: 15,
    marginVertical: 8,
    width: '70%',
    borderRadius: 25,
    alignSelf: 'center',
  },
  actionText: {
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE_LARGE,
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontWeight: Fonts.FONT_WEIGHT_HEAVY,
    color: Colors.TEXT_LIGHT,
  },
  infoText: {
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE_MEDIUM,
    fontFamily: Fonts.FONT_FAMILY_BLACK,
    color: Colors.TEXT_DARK,
  },
});

export default styles;
