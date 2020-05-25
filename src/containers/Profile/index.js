import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Height, Width, story_png, color_picker_png, help_png } from '../../constants'
import { getUsername } from '../../services/storage';
import styles from './styles';

class Profile extends React.Component {
  state = {
    userName: '' //Sample Username
  }

  async componentDidMount() {
    const userName = await getUsername();
    if (userName) {
      this.setState({userName: userName})
    }
  }

  _renderTextComponent = (text, key) => {
    return (
      <View key={key} style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: Width * 0.86,
        paddingVertical: Height * 0.01,
        marginBottom: Height * 0.01,
        borderRadius: Height * 0.05,
        backgroundColor: '#13333720',
      }}>
        <Text style={{fontSize: 20, fontFamily: 'BalooChettan2-Regular'}}>{text}</Text>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const { userName } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Image style={styles.avatar} source={require('../../assets/images/test_avatar1.jpg')}/>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{userName}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.boxesContainer}>
          <TouchableOpacity style={[styles.box, {backgroundColor: '#FF6B35'}]} onPress={() => navigation.navigate("Stories")}>
            <Image style={styles.boxIcon} source={story_png} />
            <Text style={styles.boxText}>Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, {backgroundColor: '#EFEFD0'}]} onPress={() => navigation.navigate("Pick")}>
            <Image style={styles.boxIcon} source={color_picker_png} />
            <Text style={styles.boxText}>Pick color</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, {backgroundColor: '#4381AF'}]} onPress={() => navigation.navigate("Settings")}>
            <Image style={styles.boxIcon} source={help_png} />
            <Text style={styles.boxText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: Height * 0.01}}>
          <Text style={styles.lastStoriesText}>~ Last 3 Stories ~</Text>
        </View>
        <View>
          {this._renderTextComponent("Speaking is good. Work is better", "s1")}
          {this._renderTextComponent("Beas are flying. I eat honey", "s2")}
          {this._renderTextComponent("I love mom. I gifted car", "s3")}
        </View>
      </ScrollView>
    )
  }
}

export default Profile;
