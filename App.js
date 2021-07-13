import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'

import Welcome from './screens/SignupLoginScreen';
import Settings from './screens/SettingsScreen'
import CustomSlideBarMenu from './components/CustomSlideBarMenu';
import {AppTabNavigator} from './components/AppTabNavigator'

export default function App() {
  return (
   <AppContainer/>
  );
}


const AppDrawerNavigator = createDrawerNavigator({
  Home:{
   screen:AppTabNavigator
  },
  Settings:{
    screen:Settings
  },
 },
 {
   contentComponent:CustomSlideBarMenu,
   TextComponent: "Bartender App",
 },
 {
  initialRouteName: 'Home'
 });

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: Welcome},
  DrawerNavigator:{screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(switchNavigator);
