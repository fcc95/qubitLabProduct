import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utilities/colors';
import Typography from '../typography/Typography';

type IProps = {amount: number};

const CartAmount = ({amount}: IProps) => (
  <View style={styles.container}>
    <Typography
      text={`Total: ${amount}`}
      color="white"
      fontWeight="bold"
      fontSize="large"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: Colors.grey,
  },
});

export default CartAmount;
