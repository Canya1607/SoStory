import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Stories</Text>
      </View>
    );
  }
}

export default Stories;
