import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useAppSelector} from '../store';
import {BottomNavigator} from './BottomNavigation';

const Navigation = () => {
  const cartProductNumber = useAppSelector(state => state.cart.productNumber);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <BottomNavigator productNumber={cartProductNumber} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;
