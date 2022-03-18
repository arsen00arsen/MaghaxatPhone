/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import RootStackScreen from './screens/loginRegistrScreens/RootStackScreen';
import MainTabScreen from "./screens/navBarScreens/MainTabScreen";
// import  DrawerContent from "./screens/navBarScreens/DrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookmarkScreen from "./screens/navBarScreens/BookmarkScreen";
import ChatScreen from './screens/navBarScreens/ChatScreen';


const Drawer = createDrawerNavigator();
const App = () => {

  return (
    <NavigationContainer >
      {/* <RootStackScreen/> */}
      <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;


