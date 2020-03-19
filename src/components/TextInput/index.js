import React from 'react';
import { View, TextInput as Input } from 'react-native';
import styles from './styles';

const TextInput = ({value, placeholder}) => {
  return (
    <Input
      style={styles.container}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
