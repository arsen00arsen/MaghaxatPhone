import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FilterHead = () => {
    const navigation = useNavigation();

    
    return (
        <View style={styles.container}>
            <View style={styles.badgedIcon}>
                <TouchableOpacity style={styles.button} >
                <MaterialCommunityIcons name="filter" size={22} color="#BB9E79" />
                </TouchableOpacity>

            </View>
            <Image
                animation="fadeInUpBig"
                duraton="1500"
                source={require('../../assets/logoHeader.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <View style={styles.searchIcon}>
            <TouchableOpacity  onPress={() => navigation.navigate('FilterResultScreen')}>
                <MaterialCommunityIcons  name="check-all" size={24} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FilterHead;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: `space-between`,
        width: "100%",
        minHeight: 40,
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
        borderRadius: 5,
        backgroundColor: "#ffffff"
    },
    searchIcon: {
        display: `flex`,
        alignItems: 'center',
        justifyContent: `center`,
        width: 47,
        height: 47,
        borderRadius: 5,
        backgroundColor: "#BB9E79"
    },
    button:{
        display: `flex`,
        alignItems: 'center',
        justifyContent: `center`,
        width: "100%",
        height: "100%"
    }


});


