import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AntDesign,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

const MyPostsComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require("../assets/FakeImages/Nikol.png")} style={styles.userspic}>
                </Image>
                    <Text style={styles.usersname}>Nikol Pashinyan</Text>
                    <AntDesign name="delete" size={20} color="#F24E1E" style={styles.deleteIcon}/>
            </View>
            <Image source={require("../assets/FakeImages/Nikol.png")} style={styles.mediaVideo}>
            </Image>
            <View style={styles.postIcons}>
            <AntDesign name="hearto" size={24} color="#8A8A8A" />
            <FontAwesome5 name="comment" size={24} color="#8A8A8A" />
            <MaterialCommunityIcons name="share-outline" size={24} color="#8A8A8A" />
            </View>
        </View>
    );
};

export default MyPostsComponent;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: `center`,
        width: "100%",
        height: 292,
        marginVertical: 20,
        borderRadius: 8,
        padding: 8,
        backgroundColor: "#ffffff"
    },
    mediaVideo: {
        width: "100%",
        height: 170,
        borderRadius: 8
    },
    userInfo: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingBottom: 17
    },
    userspic: {
        height: 32,
        width: 32,
        borderRadius: 50

    },
    usersname:{
        color: "#666666",
        paddingLeft: 10,
        fontSize:14
    },
    postIcons: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        marginTop: 10
    },
    deleteIcon:{
        marginLeft: "auto"
    }

   
});


