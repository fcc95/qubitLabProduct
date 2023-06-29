import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store';
import {getProducts} from '../../store/product/productActions';

const ProductList = () => {
  const dispatch = useAppDispatch();

  const {products, loading, hasError} = useAppSelector(state => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (hasError) {
    return (
      <View>
        <Text>something wrong</Text>
      </View>
    );
  }

  if (loading === 'pending') {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }

  if (!Boolean(products.length)) {
    return (
      <View>
        <Text>Product not fount</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {products.map(product => (
        <View key={product.id} style={styles.productItem}>
          <Text>{product.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productItem: {
    marginTop: 10,
  },
});

export default ProductList;
