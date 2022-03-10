import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

const SplashScreen = ({ navigation }) => {


    return (
        <LinearGradient
            colors={["#D6AB6F", '#D6AB6F', '#B8B8B8', '#B8B8B8']}
            style={styles.linearGradient}
        >
            <StatusBar backgroundColor='#009387' barStyle="light-content" />

            <View style={styles.content}>
                <Text style={styles.text}>Welcome to</Text>
                <Animatable.Image
                    animation="fadeInUpBig"
                    duraton="1500"
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignInScreen')}>
                    <View></View>
                    <Text style={styles.textSign}>Next</Text>
                    <AntDesign name="arrowright" size={20} color="white" style={styles.arrowIcon} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default SplashScreen;


// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.28;

const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
        justifyContent: "center",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "70%"
    },
    logo: {
        width: 237,
        height: 57,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'flex-start',
        marginTop: 30,
        borderRadius: 50,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        width: 237,
        height: 57,
        alignItems: "center",
        justifyContent: "space-between",
    },
    arrowIcon: {
        marginRight: 20
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
    }
});