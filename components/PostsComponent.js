import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AntDesign,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
const PostsComponent = () => {


    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require("../assets/FakeImages/Nikol.png")} style={styles.userspic}>
                </Image>
                    <Text style={styles.usersname}>Nikol Pashinyan</Text>
            </View>
            <Image source={require("../assets/FakeImages/Nikol.png")} style={styles.mediaVideo}>
            </Image>
            <View style={styles.postIcons}>
            <AntDesign name="hearto" size={24} color="black" />
            <FontAwesome5 name="comment" size={24} color="black" />
            <AntDesign name="sharealt" size={24} color="black" />
            <MaterialCommunityIcons name="share-outline" size={24} color="black" />
            </View>
        </View>
    );
};

export default PostsComponent;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: `center`,
        width: "100%",
        height: 292,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "silver",
        borderRadius: 8,
        padding: 8
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
        paddingRight: 17,
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
    }

   
});


