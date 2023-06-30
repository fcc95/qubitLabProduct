import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../utilities/colors';

type IProps = {
  text: string | number;
  color?: keyof typeof Colors;
  fontWeight?: 'light' | 'normal' | 'bold';
  fontSize?: 'mini' | 'small' | 'medium' | 'large';
};

const Typography = ({
  text,
  fontSize = 'medium',
  color = 'black',
  fontWeight = 'normal',
}: IProps) => (
  <Text
    style={{...styles[fontSize], ...styles[fontWeight], color: Colors[color]}}>
    {text}
  </Text>
);

const styles = StyleSheet.create({
  mini: {
    fontSize: 10,
  },
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 15,
  },
  large: {
    fontSize: 20,
  },
  light: {
    fontWeight: '400',
  },
  normal: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Typography;
