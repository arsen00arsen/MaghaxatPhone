import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const MyaccountUsserInfor = () => {
    return (
        <View style={styles.container}>
            <View
                style={styles.userProfile}
            >
                <View style={styles.imgFrame}>
                    <Image
                        source={require('../assets/FakeImages/Nikol.png')}
                        style={styles.userImage}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Nikol Pahinyan</Text>
                    <Text style={styles.userDate}>
                        17.04.1968
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default MyaccountUsserInfor;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F2F2F2',
    },
    userProfile: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    imgFrame: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#E6E6E6",
        width: 107,
        height: 107,
    },
    userImage: {
        width: 103,
        height: 103,
        borderRadius: 999,
        borderColor: "#E6E6E6",
        borderWidth: 3,
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
});