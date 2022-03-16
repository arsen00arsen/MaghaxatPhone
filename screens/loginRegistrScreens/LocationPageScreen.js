import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
// import CountrySelect from '../components/CountrySelect';


const LocationPageScreen = ({ navigation }) => {
  
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
                        <Text style={styles.text}>Choose</Text>
                        <Text style={styles.text}>priority</Text>
                    </View>
                    <View></View>
                </View>
                <View style={styles.inputSIcon}>
                    <Animatable.Image
                        animation="fadeInUpBig"
                        duraton="1500"
                        source={require('../../assets/Location.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
                    <View style={styles.action}>
                      
                        {/* <CountrySelect /> */}
                    </View>
                    {/* <View style={styles.action}>
                        <Text style={styles.inputHeader}>Type Indigent</Text>
                        <RNPickerSelect
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Talent', value: 'talent' },
                                { label: 'Advertising', value: 'advertising' },

                            ]}
                            Icon={() => {
                                return <AntDesign name="down" size={20} color="#909090" style={styles.icon} />;
                            }}
                        />
                    </View> */}
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreatePasswordScreen')}>
                        <View></View>
                        <Text style={styles.textSign}>Next</Text>
                        <AntDesign name="arrowright" size={20} color="white" style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>



    );
};

export default LocationPageScreen;

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
        alignItems: "center"
    },
    inputSIcon: {
        display: "flex",
        alignItems: "center"
    },
    titlecontent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        width: 193,
        height: 160,
    },
    icon: {
        paddingLeft: 10,
        bottom: 15
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
    inputHeader: {
        fontSize: 12,
        color: "#828282",
        paddingTop: 10,
        paddingLeft: 12
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

