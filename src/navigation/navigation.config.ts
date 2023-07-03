import {Colors} from '../utilities/colors';

export type NavigationParamsList = {
  Home: undefined;
  Cart: undefined;
  CartInfo: undefined;
  ProductList: undefined;
  ProductDetail: undefined;
};

const defaultNavOptions = {
  headerTitle: '',
  headerStyle: {
    backgroundColor: Colors.white,
  },
  headerTintColor: Colors.black,
};

export default defaultNavOptions;
