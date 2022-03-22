import React from 'react';
import { View, Text, StyleSheet, StatusBar,ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderBackSearch from '../../components/HeaderComponent/HeaderBackSearch';
import Example from '../../components/Example';



const GeneralScreen = ({ navigation }) => {
    const theme = useTheme();


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle={theme.dark ? "light-content" : "dark-content"} />
            <HeaderBackSearch />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                {/* <Example /> */}
            </ScrollView>
        </View>
    );
};

export default GeneralScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        backgroundColor: '#F2F2F2',
        height: "100%"
    },
    


});
