/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import React, { useEffect } from 'react';
 import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/loginRegistrScreens/RootStackScreen';
import MainTabScreen from "./screens/navBarScreens/MainTabScreen";
// import  DrawerContent from "./screens/navBarScreens/DrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from './screens/navBarScreens/ChatScreen';
import UserPageScreen from './screens/navBarScreens/UserPageScreen';
import AccounProfiletScreen from './screens/navBarScreens/AccounProfiletScreen';
import FilterScreen from './screens/navBarScreens/FilterScreen';
import FilterResultScreen from './screens/navBarScreens/FilterResultScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const Drawer = createDrawerNavigator();
const App = () => {


  return (
    <NavigationContainer >
      {/* <RootStackScreen/> */}
      <Drawer.Navigator screenOptions={{
        headerShown: false,
        
      }}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
        <Drawer.Screen name="FilterScreen" component={FilterScreen} />
        <Drawer.Screen name="FilterResultScreen" component={FilterResultScreen} />
        <Drawer.Screen name="UserPageScreen" component={UserPageScreen} />
        <Drawer.Screen name="AccounProfiletScreen" component={AccounProfiletScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;


