import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/button/Button';
import CardActions from '../../components/cardAction/CardActions';
import CartAmount from '../../components/cartAmount/CartAmount';
import ProductCard from '../../components/productCard/ProductCard';
import QuantityBox from '../../components/quantityBox/QuantityBox';
import {useAppDispatch, useAppSelector} from '../../store';
import {updateCart} from '../../store/cart/cartSlice';
import {Product} from '../../store/product/product.types';

const Cart = () => {
  const {totalAmount, items} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleDecrement = (quantity: number, productId: number) => {
    dispatch(updateCart({quantity, productId}));
  };

  const handleIncrement = (quantity: number, productId: number) => {
    dispatch(updateCart({quantity, productId}));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.keys(items).map((productId: string) => (
          <ProductCard
            key={productId}
            product={items[productId].product}
            quantity={items[productId].quantity}
            action={
              <CardActions
                quantity={items[productId].quantity}
                handleIncrement={() => {
                  const updatedQuantity = items[productId].quantity + 1;
                  handleIncrement(updatedQuantity, Number(productId));
                }}
                handleDecrement={() => {
                  const updatedQuantity = Math.max(
                    -1,
                    items[productId].quantity - 1,
                  );
                  handleDecrement(updatedQuantity, Number(productId));
                }}
              />
            }
          />
        ))}
      </ScrollView>
      <CartAmount amount={totalAmount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cart;
