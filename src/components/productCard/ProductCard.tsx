import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Product} from '../../store/product/product.types';
import ProductImage from '../productImage/ProductImage';
import Typography from '../typography/Typography';

type IProps = {
  product: Product;
  quantity?: number;
  action?: ReactNode;
  handleCardClick?: () => void;
};

const ProductCard = ({
  product,
  quantity = 1,
  action,
  handleCardClick,
}: IProps) => {
  const {image, title, price} = product;
  const productPrice = price * quantity;

  return (
    <TouchableOpacity
      activeOpacity={handleCardClick ? 0.5 : 1}
      onPress={handleCardClick}
      style={styles.container}>
      <ProductImage imageUrl={image} />
      <View style={styles.description}>
        <Typography text={title} />
        <Typography text={`$${productPrice.toFixed(2)}`} />
      </View>
      {Boolean(action) && action}
    </TouchableOpacity>
  );
};

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
});

export default ProductCard;
