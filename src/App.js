import React from 'react';
import { SafeAreaView } from 'react-native';
import AppContainer from './routes';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

export default App;
