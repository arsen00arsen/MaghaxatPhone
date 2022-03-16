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



const Drawer = createDrawerNavigator();
const App = () => {

  return (
    <NavigationContainer >
      {/* <RootStackScreen/> */}
      <Drawer.Navigator>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {/* <Drawer.Screen name="SupportScreen" component={SupportScreen} />
           <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;
