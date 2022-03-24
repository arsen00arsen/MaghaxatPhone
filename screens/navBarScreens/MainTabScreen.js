import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


// import HeaderChatSearch from "../../components/HeaderChatSearch"
import HomeScreen from './HomeScreen';
import MediaScreen from '../MediaScreens/MediaScreen';
import RowVideosScreen from '../MediaScreens/RowVideosScreen';
import GridVediosScreen from '../MediaScreens/GridVediosScreen';

import BenefactorsScreen from './BenefactorsScreen';
import AccountsScreen from './AccountsScreen';
// import AccountScreen from './AccountScreen';
import MyAccountScreen from "../MyAccountScreens/MyAccountScreen";
import GeneralScreen from "../MyAccountScreens/GeneralScreen"
import MyPostsScreen from "../MyAccountScreens/MyPostsScreen"
import MyMediaScreen from "../MyAccountScreens/MyMediaScreen"
import MySubscribtionsScreen from "../MyAccountScreens/MySubscribtionsScreen"
import MySubscribersScreen from "../MyAccountScreens/MySubscribersScreen"
import SettingsScreen from "../MyAccountScreens/SettingsScreen"
//  import MyPostsScreen from "../MyAccountScreens/MyPostsScreen"

const AccountStack = createStackNavigator();
const MediaStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#A48A66"
        inactiveColor="#ffffff"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-outline" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Media"
            component={MediaPageScreen}
            options={{
                // tabBarLabel: 'Updates',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="perm-media" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Benefactors"
            component={BenefactorsScreen}
            options={{
                tabBarLabel: 'Benefactors',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="hand-holding-usd" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Accounts"
            component={AccountsScreen}
            options={{
                tabBarLabel: 'Accounts',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-group" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="My account"
            component={MyAccountStackScreen}
            options={{
                tabBarLabel: 'My account',
                tabBarColor: '#C6B7A2',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle" size={25} color={color} />
                ),
            }}
        />
    </Tab.Navigator>
);
export default MainTabScreen;




const MediaPageScreen = ({ navigation }) => (
    <MediaStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <MediaStack.Screen name="MediaScreen" component={MediaScreen} />
        <MediaStack.Screen name="RowVideosScreen" component={RowVideosScreen} />
        <MediaStack.Screen name="GridVediosScreen" component={GridVediosScreen} />
    </MediaStack.Navigator>
);

const MyAccountStackScreen = ({ navigation }) => (
    <AccountStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <AccountStack.Screen name="MyAccountScreen" component={MyAccountScreen} />
        <AccountStack.Screen name="GeneralScreen" component={GeneralScreen} />
        <AccountStack.Screen name="MyPostsScreen" component={MyPostsScreen} />
        <AccountStack.Screen name="MyMediaScreen" component={MyMediaScreen} />
        <AccountStack.Screen name="MySubscribtionsScreen" component={MySubscribtionsScreen} />
        <AccountStack.Screen name="MySubscribersScreen" component={MySubscribersScreen} />
        <AccountStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </AccountStack.Navigator>
);

