/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
 
 
 const App = () => {

   return (
     <NavigationContainer >
      <RootStackScreen/>
         {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
           <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
           <Drawer.Screen name="SupportScreen" component={SupportScreen} />
           <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
         </Drawer.Navigator>
       */}
       
     </NavigationContainer>
   );
 }
 
 export default App;
 