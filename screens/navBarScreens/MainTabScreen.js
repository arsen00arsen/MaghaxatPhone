import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import HeaderChatSearch from "../../components/HeaderChatSearch"
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

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
            component={HomeStackScreen}
            options={{
                // tabBarLabel: 'Home',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
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
                    <Icon name="ios-person" color={color} size={26} />
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
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            
            title:   <HeaderChatSearch />
            
        }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
             title: '......................',
           
        }} />
    </DetailsStack.Navigator>
);

// headerLeft: () => (
//     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//     )