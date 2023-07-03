import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Colors} from '../utilities/colors';
import CartNavigation from './CartNavigation';
import ProductNavigator from './ProductNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationParamsList} from './navigation.config';

const BottomTabNavigation = createBottomTabNavigator<NavigationParamsList>();

type IProps = {
  productNumber: number;
};

export const BottomNavigator = ({productNumber}: IProps) => {
  return (
    <BottomTabNavigation.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Helvetica-medium',
          letterSpacing: -0.2,
        },
      }}>
      <BottomTabNavigation.Screen
        name="Home"
        component={ProductNavigator}
        options={{
          tabBarIcon: ({focused}: any) => (
            <AntDesign
              name="home"
              style={{
                color: focused ? Colors.primary : Colors.black,
                fontSize: 24,
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <BottomTabNavigation.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarIcon: ({focused}: any) => (
            <AntDesign
              name="shoppingcart"
              style={{
                color: focused ? Colors.primary : Colors.black,
                fontSize: 24,
              }}
            />
          ),

          tabBarBadge: productNumber || undefined,
          headerShown: false,
          tabBarLabel: 'Cart',
        }}
      />
    </BottomTabNavigation.Navigator>
  );
};
