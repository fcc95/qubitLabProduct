import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

type IProps = {
  imageUrl: string;
  imageType?: 'small' | 'medium';
};

const ProductImage = ({imageUrl, imageType = 'small'}: IProps) => (
  <View style={styles[imageType]}>
    <Image
      style={styles.image}
      source={{
        uri: imageUrl,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  small: {
    height: 80,
    width: 120,
    borderWidth: 1,
  },
  medium: {
    height: 120,
    width: 180,
    borderWidth: 1,
  },
  image: {
    flex: 1,
  },
});

export default ProductImage;
