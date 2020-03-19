import React from 'react';
import { View, Text } from 'react-native';
import TextInput from '../../components/TextInput'
import Button from '../../components/Button';
import styles from './styles';

class Auth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput value={null} placeholder="Login" />
        <TextInput value={null} placeholder="Password" />
        <Button
          title="To Main"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

export default Auth;
