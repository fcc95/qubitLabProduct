import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/button/Button';
import ProductImage from '../../components/productImage/ProductImage';
import QuantityBox from '../../components/quantityBox/QuantityBox';
import Typography from '../../components/typography/Typography';
import {useAppDispatch, useAppSelector} from '../../store';
import {addCart, updateCart} from '../../store/cart/cartSlice';

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const {selectedProduct} = useAppSelector(state => state.product);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleDecrement = () => {
    setProductQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    setProductQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleSubmit = () => {
    if (selectedProduct) {
      dispatch(addCart({quantity: productQuantity, product: selectedProduct}));
    }
  };

  if (!selectedProduct) {
    return <Typography text={'not found'} color="danger" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProductImage imageUrl={selectedProduct.image} imageSize="medium" />
        <View style={styles.info}>
          <Typography text={selectedProduct.title} />
          <Typography text={`$${selectedProduct.price}`} />
        </View>
      </View>
      <View style={styles.description}>
        <Typography text={selectedProduct.description} />
      </View>
      <View>
        <View style={styles.action}>
          <Button
            title="-"
            style={styles.actionButton}
            handlePress={handleDecrement}
          />
          <QuantityBox quantity={productQuantity} />
          <Button
            title="+"
            style={styles.actionButton}
            handlePress={handleIncrement}
          />
        </View>
        <Button title="Add To Cart" handlePress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
  },
  info: {
    justifyContent: 'space-around',
    width: 150,
    gap: 5,
    paddingHorizontal: 8,
  },
  description: {
    paddingVertical: 10,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingBottom: 25,
  },
  actionButton: {width: 40, paddingVertical: 8},
});

export default ProductDetail;
