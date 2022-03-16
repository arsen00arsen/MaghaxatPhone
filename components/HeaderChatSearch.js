import React from 'react';
import { View, Image, Button, StyleSheet, StatusBar } from 'react-native';
// import { useTheme } from '@react-navigation/native';


const HeaderChatSearch = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image
                animation="fadeInUpBig"
                duraton="1500"
                source={require('../assets/logoHeader.png')}
                 style={styles.logo}
                resizeMode="stretch"
            />

        </View>
    );
};

export default HeaderChatSearch;

const styles = StyleSheet.create({
    container: {
  
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 146,
        height:35
    }
});
