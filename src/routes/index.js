import React, { useState } from 'react'
import Auth from '../containers/Auth';
import Main from '../containers/Main';
//
import Profile from '../containers/Profile'
//
import Stories from '../containers/Profile/screens/Stories';
import Pick from '../containers/Profile/screens/Pick';
import Settings from '../containers/Profile/screens/Settings';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getIsLogined } from '../services/storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

console.log(DefaultTheme);

const AppTheme = {
  // ...DarkTheme,
  ...DefaultTheme,
  // colors: {
  //   background: '#FFE9CE',
  //   border: '#FFBE86',
  //   card: '#FFE9CE',
  //   primary: '#1C3CB5',
  //   text: '#AA6D74'
  // }
} 

console.log(AppTheme);

const AuthStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      <ProfileStack.Screen name="Stories" component={Stories} />
      <ProfileStack.Screen name="Pick" component={Pick} />
      <ProfileStack.Screen name="Settings" component={Settings} />
    </ProfileStack.Navigator>
  )
}

function AppContainer() {
  const [isLogined, setLogined] = useState(false)

  return (
    <NavigationContainer theme={AppTheme}>
      {isLogined ? (
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Profile') {
                iconName = focused ? 'user-circle' : 'user-circle-o';
                return <FontAwesome name={iconName} size={size} color={color} />;
              } else if (route.name === 'Stories') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Stories" component={Main} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen name='Auth' component={Auth} initialParams={{setLogined: setLogined}} />
        </AuthStack.Navigator>
      )}
      
      
    </NavigationContainer>
  )
}

export default AppContainer;