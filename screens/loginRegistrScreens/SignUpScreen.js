import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';
import UploadImage from '../../components/UploadImage';
// import BirthDate from '../../components/BirthDate';

const SignUpScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        name: '',
        lastName: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        // isValidPassword: true,
    });


   
    const nameInputChange = (val) => {
        if (val.trim().length >= 4) {

            setData({
                ...data,
                name: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const lastNameInputChange = (val) => {
        if (val.trim().length >= 4) {

            setData({
                ...data,
                lastName: val,

            });
        } else {
            setData({
                ...data,
                lastName: val,

            });
        }
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
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
                    <View style={styles.titlecontent}>
                        <Text style={styles.text}>Create Your</Text>
                        <Text style={styles.text}>Profile</Text>
                    </View>
                    <View></View>
                </View>
                <UploadImage />
                <View>
                    <View style={styles.action}>
                        <Text style={styles.inputHeader}>First Name</Text>
                        <TextInput
                            // placeholder="Your Email"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => nameInputChange(val)}

                        />
                    </View>
                    <View style={styles.action}>
                        <Text style={styles.inputHeader}>Last Name</Text>
                        <TextInput
                            // placeholder="Your Email"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => lastNameInputChange(val)}
                        />
                    </View>
               
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccountInfoScreen')}>
                        <View></View>
                        <Text style={styles.textSign}>Next</Text>
                        <AntDesign name="arrowright" size={20} color="white" style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            
        </LinearGradient>
    );
};

export default SignUpScreen;

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
    headerWidthButton: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:30
    },
    titlecontent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        width: "100%",
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
        backgroundColor: "#FFFFFF",
        width: 250,
        height: 60,
        borderRadius: 4,
        alignItems: "flex-start"
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


});