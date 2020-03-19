import React from 'react'
import Auth from '../containers/Auth';
import Main from '../containers/Main';
import Profile from '../containers/Profile'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createCompatNavigatorFactory } from '@react-navigation/compat';

const Tab = createBottomTabNavigator()

function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Stories" component={Main} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer;

// const App = createCompatNavigatorFactory(createSwitchNavigator)({
//   Auth: {
//     screen: Auth,
//   },
//   Tab: {
//     screen: Tabs,
//   },
// })

// export const AppContainer = createAppContainer(App)
