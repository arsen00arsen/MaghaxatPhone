import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import HeaderChatSearch from "../../components/HeaderChatSearch"
import HomeScreen from './HomeScreen';
import MediaScreen from './MediaScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import AccountScreen from './AccountScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                // tabBarLabel: 'Home',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-outline" size={24} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Media"
            component={MediaScreen}
            options={{
                // tabBarLabel: 'Updates',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="perm-media" size={24}color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="hand-holding" size={24} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-group" size={24} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{
                tabBarLabel: 'Account',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle" size={24} color={color} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

// const HomeStackScreen = ({ navigation }) => (
//     <HomeStack.Navigator >
//         <HomeStack.Screen name="Home" component={HomeScreen} options={{
//             // title:   <HeaderChatSearch />
            
//         }} />
//     </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({ navigation }) => (
//     <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#fff',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//              title: '......................',
           
//         }} />
//     </DetailsStack.Navigator>
// );

// headerLeft: () => (
//     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//     )