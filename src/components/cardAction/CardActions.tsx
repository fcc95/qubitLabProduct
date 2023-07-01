import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../button/Button';
import QuantityBox from '../quantityBox/QuantityBox';

type IProps = {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
};

const CardActions = ({quantity, handleDecrement, handleIncrement}: IProps) => {
  return (
    <View style={styles.actionsContainer}>
      <Button
        title="+"
        style={styles.actionButton}
        handlePress={handleIncrement}
      />
      <QuantityBox quantity={quantity} />
      <Button
        title="-"
        style={styles.actionButton}
        handlePress={handleDecrement}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {gap: 7},
  actionButton: {width: 40, paddingVertical: 8},
});

export default CardActions;
