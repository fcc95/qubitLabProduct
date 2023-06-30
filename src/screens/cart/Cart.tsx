import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CartAmount from '../../components/cartAmount/CartAmount';
import Typography from '../../components/typography/Typography';

const Cart = () => (
  <View style={styles.container}>
    <ScrollView>
      <Typography text={'CART PAGE'} />
    </ScrollView>
    <CartAmount amount={12} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cart;
