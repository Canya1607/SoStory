import React from 'react';
import { View, Image } from 'react-native';
import TextInput from '../../components/TextInput'
import Button from '../../components/Button';
import { setUsername } from '../../services/storage';
import styles from './styles';

class Auth extends React.Component {
  state = {
    userName: ''
  }

  _continue = async () => {
    const success = await setUsername(this.state.userName);
    if (success) {
      this.props.route.params.setLogined(true)
    }
  }

  render() {
    const { userName } = this.state;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.jpg')} style={{width: 200, height: 200}} />
        <TextInput style={styles.input} value={userName} placeholder="Your name" onChangeText={(text) => this.setState({userName: text})} />
        <Button
          style={styles.button}
          title="Continue"
          // onPress={() => this.props.navigation.navigate('Main')}
          onPress={this._continue}
        />
      </View>
    );
  }
}

export default Auth;
