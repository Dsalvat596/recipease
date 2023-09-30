import React, {useState, FC, ReactNode} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes/styles';

type ButtonProps = {
  btnColor: string;
  onPress: () => void;
  outlined?: boolean;
  title: string;
  small?: boolean;
};

const CustomBtn: FC<ButtonProps> = ({
  btnColor,
  outlined = false,
  small = false,
  onPress,
  title,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          small ? {width: 90} : {width: 325},
          outlined
            ? // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor: btnColor,
                borderRadius: 25,
                borderStyle: 'solid',
                borderWidth: 1,
              }
            : {backgroundColor: btnColor, borderRadius: 12},
        ]}
        onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    alignItems: 'center',
    paddingTop: 14,
    marginTop: 20,
  },
  buttonOutlined: {},
  buttonSolid: {},
  buttonTitle: {
    fontFamily: Fonts.FONT_SIZE_MEDIUM.toString(),
    color: Colors.ACTION_COLOR,
  },
});

export default CustomBtn;
