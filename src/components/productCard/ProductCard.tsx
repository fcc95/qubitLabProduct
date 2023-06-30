import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../button/Button';
import ProductImage from '../productImage/ProductImage';
import QuantityBox from '../quantityBox/QuantityBox';
import Typography from '../typography/Typography';

type IProps = {
  imageUrl: string;
  title: string;
  price: number;
  cartMode?: boolean;
};

const ProductCard = ({imageUrl, title, price, cartMode}: IProps) => (
  <View style={styles.container}>
    <ProductImage imageUrl={imageUrl} />
    <View style={styles.description}>
      <Typography text={title} />
      <Typography text={price} />
    </View>
    {cartMode && (
      <View style={styles.actionsContainer}>
        <Button title="+" style={styles.actionButton} handlePress={() => {}} />
        <QuantityBox quantity={12} />
        <Button title="-" style={styles.actionButton} handlePress={() => {}} />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    justifyContent: 'space-around',
    width: 150,
    gap: 5,
    paddingHorizontal: 8,
  },
  actionsContainer: {gap: 7},
  actionButton: {width: 40, paddingVertical: 8},
});

export default ProductCard;
