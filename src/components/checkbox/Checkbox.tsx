import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FormattedIngredient} from '../../types';
import {Fonts} from '../../themes/styles';

type CheckBoxProps = {
  item: FormattedIngredient;
  onToggle: (item: any, val: boolean) => void;
};

const Checkbox: FC<CheckBoxProps> = ({item, onToggle}) => {
  return (
    <CheckBox
      style={{transform: [{scale: 0.8}]}}
      disabled={false}
      value={item.used}
      boxType="square"
      onValueChange={val => onToggle(item, val)}
    />
  );
};

export default Checkbox;
