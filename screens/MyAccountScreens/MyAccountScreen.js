import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderBackSearch from '../../components/HeaderComponent/HeaderBackSearch';
import UploadImage from '../../components/UploadImage';
import { AntDesign } from '@expo/vector-icons';


const MyAccountScreen = ({ navigation }) => {
    const theme = useTheme();


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle={theme.dark ? "light-content" : "dark-content"} />
            <HeaderBackSearch />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                <View style={styles.user}>
                    <View style={styles.userImage}>
                        <UploadImage width={97} height={97} />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>
                            Nikol Pashinyan
                        </Text>
                        <Text style={styles.userDate}>
                            17.04.1968
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeneralScreen')}>
                    <Text style={styles.buttonText}>General</Text>
                    <AntDesign name="right" size={20} color="#909090" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyPostsScreen')}>
                    <Text style={styles.buttonText}>My Posts</Text>
                    <AntDesign name="right" size={20} color="#909090" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyMediaScreen')}>
                    <Text style={styles.buttonText}>My Media</Text>
                    <AntDesign name="right" size={20} color="#909090" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MySubscribtionsScreen')}>
                    <Text style={styles.buttonText}>My Subscribtions</Text>
                    <AntDesign name="right" size={20} color="#909090" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MySubscribersScreen')}>
                    <Text style={styles.buttonText}>My Subscribtions</Text>
                    <AntDesign name="right" size={20} color="#909090" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.buttonText}>Settings</Text>
                    <AntDesign name="right" size={20} color="#909090" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: '#F2F2F2',
        height: "100%"
    },
    user: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30
    },
    userInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20
    },
    userName: {
        fontSize: 20,
        fontWeight: "400",
        color: "#727272"
    },
    userDate: {
        fontSize: 16,
        fontWeight: "600",
        color: "#4A4A4A"
    },
    userImage: {
        width: 103,
        height: 103,
        borderRadius: 999,
        borderColor: "#E6E6E6",
        borderWidth: 3,
    },
    button: {
        width: "100%",
        height: 65,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 45,
        marginBottom: 20
    },
    buttonText: {
        color: "#303030",
        fontWeight: "bold",
        fontSize: 18
    }


});
