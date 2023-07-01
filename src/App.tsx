import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import ProductList from './screens/productList/ProductList';
import ProductDetail from './screens/productDetail/ProductDetail';
import Cart from './screens/cart/Cart';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  const [activePage, setActivePage] = useState('cart');
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.sectionContainer}>
          {activePage === 'list' && <ProductList />}
          {activePage === 'detail' && <ProductDetail />}
          {activePage === 'cart' && <Cart />}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
