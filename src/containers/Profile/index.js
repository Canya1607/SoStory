import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Height, Width, story_png, color_picker_png, help_png } from '../../constants'
import styles from './styles';

class Profile extends React.Component {
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
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Image style={styles.avatar} source={require('../../assets/images/test_avatar.jpg')}/>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>Olexandr Hnennyi</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.boxesContainer}>
          <View style={[styles.box, {backgroundColor: '#FF6B35'}]}>
            <Image style={styles.boxIcon} source={story_png} />
            <Text style={styles.boxText}>Stories</Text>
          </View>
          <View style={[styles.box, {backgroundColor: '#EFEFD0'}]}>
            <Image style={styles.boxIcon} source={color_picker_png} />
            <Text style={styles.boxText}>Pick color</Text>
          </View>
          <View style={[styles.box, {backgroundColor: '#4381AF'}]}>
            <Image style={styles.boxIcon} source={help_png} />
            <Text style={styles.boxText}>Settings</Text>
          </View>
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
