import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import DropdownComponent from './DropDown';
const BadgedIcon = withBadge(2)(Icon);

const HeaderFilterSearch = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.badgedIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.0, 0.9]}
                colors={['#D1C7B9', '#D2C8B9']}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilterScreen')}>
                <MaterialCommunityIcons name="filter-menu-outline" size={22} color="black" />
                </TouchableOpacity>

            </LinearGradient>
            <Image
                animation="fadeInUpBig"
                duraton="1500"
                source={require('../../assets/logoHeader.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <LinearGradient
                style={styles.searchIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.0, 0.3]}
                colors={['#cccccc', '#c4c4c4']}>
                      <Feather name="search" size={24} color="black" />
            </LinearGradient>
        </View>
    );
};

export default HeaderFilterSearch;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: `space-between`,
        width: "100%",
        minHeight: 30,
        marginVertical: 20
    },
    logo: {
        width: 146,
        height: 35,
    },
    badgedIcon: {
        display: `flex`,
        alignItems: 'center',
        justifyContent: `center`,
        width: 47,
        height: 47,
        borderRadius: 5
    },
    searchIcon: {
        display: `flex`,
        alignItems: 'center',
        justifyContent: `center`,
        width: 47,
        height: 47,
        borderRadius: 5,
    },
    button:{
        display: `flex`,
        alignItems: 'center',
        justifyContent: `center`,
        width: "100%",
        height: "100%"
    }
});


