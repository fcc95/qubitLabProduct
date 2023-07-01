import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ProductImage from '../../components/productImage/ProductImage';
import Button from '../../components/button/Button';
import {useAppDispatch, useAppSelector} from '../../store';
import {getProducts} from '../../store/product/productActions';
import ProductCard from '../../components/productCard/ProductCard';
import Typography from '../../components/typography/Typography';
import {Product} from '../../store/product/product.types';
import {selectProduct} from '../../store/product/productSlice';

const ProductList = () => {
  const dispatch = useAppDispatch();

  const {products, loading, hasError} = useAppSelector(state => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSelect = (productId: number) => {
    dispatch(selectProduct({productId}));
  };

  if (hasError) {
    return (
      <View>
        <Typography text={'Something wrong'} color="danger" />
      </View>
    );
  }

  if (loading === 'pending') {
    return (
      <View>
        <Typography text={'loading...'} />
      </View>
    );
  }

  if (!Boolean(products.length)) {
    return (
      <View>
        <Typography text={'Product not fount'} />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {products.map(product => (
        <View key={product.id} style={styles.productItem}>
          <ProductCard
            product={product}
            handleCardClick={() => {
              handleSelect(product.id);
            }}
          />
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
