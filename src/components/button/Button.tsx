import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utilities/colors';
import Typography from '../typography/Typography';

type IProps = {
  title: string;
  style?: any;
  handlePress: () => void;
};

const Button = ({title, style, handlePress}: IProps) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={handlePress}
    style={{...styles.button, ...style}}>
    <View style={styles.textContainer}>
      <Typography text={title} color={'white'} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: Colors.white,
  },
});

export default Button;
