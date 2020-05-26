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

export async function getStoriesByName(username) {
  try {
    const stories = await getStories();
    const personalStories = stories.filter(value => value.username === username);
    return personalStories;
  } catch (error) {
    console.log(error);
  }
}

export async function setStory(username, story) {
  try {
    const stories = await getStories();
    stories.push({username, story});
    await AsyncStorage.setItem('stories', JSON.stringify(stories));
  } catch (error) {
    console.log(error);
  }
}

export async function setOwnStory(story) {
  try {
    const username = await getUsername();
    const stories = await getStories();
    stories.push({username, story});
    await AsyncStorage.setItem('stories', JSON.stringify(stories));
  } catch (error) {
    console.log(error);
  }
}

export async function getLastThreeStories() {
  try {
    const username = await getUsername();
    const stories = await getStoriesByName(username);
    if (stories.length <= 3) {
      return stories;
    } else {
      return stories.slice(stories.length - 3);
    }
  } catch (error) {
    console.log(error);
  }
}

//
export async function clearStorage() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
}