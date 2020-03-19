import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, TextInput, Image, Alert } from 'react-native';
import { DotsLoader } from 'react-native-indicator'; 
import { Height, Width, send_png } from '../../constants'
import styles from './styles';

class Main extends React.Component {
  state = {
    input: '',
    data: [
      'I like Hitler. I am white',
      'Hi guys. Like girls. Like boys',
      'Sipmple six words needed to write',
      'Sky is blue. Sun is red',
      'You ask. I answer. Life simple'
    ]
  }

  _showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      null,
      {cancelable: false},
    );
  }

  _addStory = () => {
    const story = this.state.input
    const words_amount = story.split(" ").length
    if (words_amount === 6) {
      this.setState((state) => {
        const newData = state.data
        newData.unshift(story)
        return {data: newData, }
      })
    } else if (words_amount > 6) {
      this._showAlert('Info', 'Ohhh, count your words. Take the limit =)')
    } else {
      this._showAlert('Info', 'Your story is too short =(')
    }
  }

  _renderStories = () => {
    const { data } = this.state
    let stories = []
    data.map((story, index) => {
      stories.push(this._renderTextComponent(story, index))
    })
    return stories
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
    const { input } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.textLogo}>- So Story -</Text>
        <View style={styles.dotsLoaderContainer}>
          <DotsLoader size={12} color="#000" betweenSpace={7} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this._renderStories()}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
            value={input}
            multiline={false}
            placeholder="Write a little story..."
            onChangeText={(text) => this.setState({input: text})}
          />
          <TouchableWithoutFeedback onPress={this._addStory}>
            <Image source={send_png} style={styles.sendIcon}/>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default Main;

{/* <Text style={{fontSize: 32}}>• • •</Text> */}
{/* {this._renderTextComponent("I like Hitler. I am white")}
{this._renderTextComponent("Hi guys. Like girls. Like boys")}
{this._renderTextComponent("Sipmple six words needed to write")}
{this._renderTextComponent("Sky is blue. Sun is red")} */}
{/* {this._renderTextComponent("You ask. I answer. Life simple")}
{this._renderTextComponent("Speaking is good. Work is better")}
{this._renderTextComponent("Beas are flying. I eat honey")}
{this._renderTextComponent("I love mom. I gifted car")}
{this._renderTextComponent("I like sport. Go to gym")}
{this._renderTextComponent("Sky is blue. Sun is red")}
{this._renderTextComponent("Hi guys. Like girls. Like boys")}
{this._renderTextComponent("Sipmple six words needed to write")}
{this._renderTextComponent("Sky is blue. Sun is red")}
{this._renderTextComponent("You ask. I answer. Life simple")}
{this._renderTextComponent("Speaking is good. Work is better")} */}