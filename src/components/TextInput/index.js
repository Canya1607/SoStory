import React from 'react';
import { View, TextInput as Input } from 'react-native';
import styles from './styles';

const TextInput = ({value, placeholder, onChangeText}) => {
  return (
    <Input
      style={styles.container}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}

export default TextInput;
