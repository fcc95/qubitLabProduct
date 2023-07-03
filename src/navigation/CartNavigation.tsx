import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/cart/Cart';
import defaultNavOptions from './navigation.config';

const CartStackNavigation = createStackNavigator();

const CartNavigation = () => {
  return (
    <CartStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <CartStackNavigation.Screen name="CartInfo" component={Cart} />
    </CartStackNavigation.Navigator>
  );
};
export default CartNavigation;
