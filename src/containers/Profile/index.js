import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Height, story_png, color_picker_png, help_png} from '../../constants';
import {getUsername, getLastThreeStories} from '../../services/storage';
import Story from '../../components/Story';
import styles from './styles';

class Profile extends React.Component {
  state = {
    userName: '', //Sample Username
    lastStories: [],
  };

  async componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      let lastStories = await getLastThreeStories();
      lastStories = lastStories.reverse();
      if (lastStories) {
        this.setState({lastStories: lastStories});
      }
    });
    console.log(this._unsubscribeListener);
    const userName = await getUsername();
    if (userName) {
      this.setState({userName: userName});
    }
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _renderLastThreeStories = () => {
    const { lastStories } = this.state;
    const components = [];
    lastStories.map((value, index) => {
      components.push(<Story key={`s${index}`} text={value.story} />);
    });
    return components;
  };

  render() {
    const {navigation} = this.props;
    const {userName} = this.state;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/default_avatar.png')}
        />
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{userName}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.boxesContainer}>
          <TouchableOpacity
            style={[styles.box, {backgroundColor: '#FF6B35'}]}
            onPress={() => navigation.navigate('Stories')}>
            <Image style={styles.boxIcon} source={story_png} />
            <Text style={styles.boxText}>Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {backgroundColor: '#EFEFD0'}]}
            onPress={() => navigation.navigate('Pick')}>
            <Image style={styles.boxIcon} source={color_picker_png} />
            <Text style={styles.boxText}>Pick color</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, {backgroundColor: '#4381AF'}]}
            onPress={() => navigation.navigate('Settings')}>
            <Image style={styles.boxIcon} source={help_png} />
            <Text style={styles.boxText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: Height * 0.01}}>
          <Text style={styles.lastStoriesText}>~ Last 3 Stories ~</Text>
        </View>
        {this._renderLastThreeStories()}
      </ScrollView>
    );
  }
}

export default Profile;
