import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Typography from '../typography/Typography';

type IProps = {quantity: number};

const QuantityBox = ({quantity}: IProps) => (
  <View style={styles.container}>
    <Typography text={quantity} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default QuantityBox;
