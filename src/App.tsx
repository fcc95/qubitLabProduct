import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import ProductList from './screens/productList/ProductList';
import ProductDetail from './screens/productDetail/ProductDetail';
import Cart from './screens/cart/Cart';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <ProductList />
        <ProductDetail />
        <Cart />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
