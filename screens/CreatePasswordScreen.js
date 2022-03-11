import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';


const CreatePasswordScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });



    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
        <LinearGradient
            colors={["#D6AB6F", '#D6AB6F', '#B8B8B8', '#B8B8B8']}
            style={styles.linearGradient}
        >
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.content}>
                <View style={styles.headerWidthButton}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Log In</Text>
                    <View></View>
                </View>
                <Animatable.Image
                    animation="fadeInUpBig"
                    duraton="1500"
                    source={require('../assets/passWord.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <View>
                    <View style={styles.action}>
                        <View style={styles.passHeader}>
                            <Text style={styles.inputHeader}>Password</Text>
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        style={styles.eyeIcon}
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        style={styles.eyeIcon}
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            // placeholder="Your Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                    </View>
                    <View style={styles.action}>
                        <View style={styles.passHeader}>
                            <Text style={styles.inputHeader}>Confirm Your Password</Text>
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        style={styles.eyeIcon}
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        style={styles.eyeIcon}
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            // placeholder=""
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LocationPageScreen')}>
                        <View></View>
                        <Text style={styles.textSign}>Next</Text>
                        <AntDesign name="arrowright" size={20} color="white" style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

export default CreatePasswordScreen;

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
        height: "70%",
        paddingHorizontal: 20
    },
    logo: {
        width: 166,
        height: 166,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15,
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
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

    action: {
        flexDirection: 'column',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        backgroundColor: "white",
        width: 250,
        height: 60,
        borderRadius: 4,
        alignItems: "start"
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        height: "100%",
        width: "100%",
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    signIn: {
        width: 237,
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "30%"
    },
    eyeIcon: {
        paddingRight: 20,
        paddingTop: 3
    },
    inputHeader: {
        fontSize: 12,
        color: "#828282",
        paddingTop: 10,
        paddingLeft: 12
    },
    passHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    headerWidthButton: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
});