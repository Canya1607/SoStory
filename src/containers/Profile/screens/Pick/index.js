import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Pick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pick</Text>
      </View>
    );
  }
}

export default Pick;
