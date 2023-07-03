import {createStackNavigator} from '@react-navigation/stack';
import ProductDetail from '../screens/productDetail/ProductDetail';
import ProductList from '../screens/productList/ProductList';
import defaultNavOptions from './navigation.config';

const ProductStackNavigation = createStackNavigator();

const ProductNavigator = () => {
  return (
    <ProductStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <ProductStackNavigation.Screen
        name="ProductList"
        component={ProductList}
      />

      <ProductStackNavigation.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
    </ProductStackNavigation.Navigator>
  );
};
export default ProductNavigator;
