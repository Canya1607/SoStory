import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({title='_BUTTON_', color='#63CCCA', onPress}) => {
  return (
    <TouchableOpacity
        style={[styles.container, {backgroundColor: color}]}
        onPress={onPress}
      >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
