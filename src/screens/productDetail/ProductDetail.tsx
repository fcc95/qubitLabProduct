import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/button/Button';
import Typography from '../../components/typography/Typography';

const ProductDetail = () => {
  return (
    <View>
      <Typography text={'Product Detail Page'} />
      <Button title="Add To Cart" handlePress={() => {}} />
    </View>
  );
};
export default ProductDetail;
