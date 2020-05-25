import AsyncStorage from '@react-native-community/async-storage';

export async function setUsername(username) {
  console.log(username);
  try {
    if (username) {
      await AsyncStorage.setItem('username', username);
      return true;
    } else {
      console.log('Provided bad username');
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUsername() {
  try {
    const username = await AsyncStorage.getItem('username');
    if (username) {
      console.log('The username:', username);
      return username;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function setLogined() {
  try {
    await AsyncStorage.setItem('isLogined', JSON.stringify(true));
  } catch (error) {
    console.log(error);
  }
}

export async function getIsLogined() {
  try {
    const isLogined = await AsyncStorage.getItem('isLogined');
    if (isLogined) {
      console.log('The isLogined', isLogined);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStories() {
  try {
    const stories = await AsyncStorage.getItem('stories');
    if (stories) {
      console.log('The stories:', stories);
      return JSON.parse(stories);
    } else {
      return [];
    }
  } catch (error) {
    
  }
}

export async function setStory(story) {
  try {
    const stories = await getStories();
    stories.push(story);
    await AsyncStorage.setItem('stories', JSON.stringify(stories));
  } catch (error) {
    console.log(error);
  }
}