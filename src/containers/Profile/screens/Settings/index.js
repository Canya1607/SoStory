import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
    );
  }
}

export default Settings;
