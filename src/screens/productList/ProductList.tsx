import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store';
import {getProducts} from '../../store/product/productActions';
import ProductCard from '../../components/productCard/ProductCard';
import Typography from '../../components/typography/Typography';
import {selectProduct} from '../../store/product/productSlice';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {NavigationParamsList} from '../../navigation/navigation.config';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<NavigationParamsList>>();
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
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {products.map(product => (
          <View key={product.id} style={styles.productItem}>
            <ProductCard
              product={product}
              handleCardClick={() => {
                handleSelect(product.id);
                navigation.navigate('ProductDetail');
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 12},
  productItem: {
    marginTop: 10,
  },
});

export default ProductList;
