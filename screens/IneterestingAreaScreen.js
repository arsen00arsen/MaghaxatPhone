import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';


const IneterestingAreaScreen = ({ navigation }) => {
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
                        <Text style={styles.text}>Your 3 most</Text>
                        <Text style={styles.text}>interesting areas</Text>
                    </View>
                    <View></View>
                </View>

                <Animatable.Image
                    animation="fadeInUpBig"
                    duraton="1500"
                    source={require('../assets/interesting.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <View>
                    <View style={styles.action}>
                        <Text style={styles.inputHeader}>Interest #1</Text>
                        <RNPickerSelect
                            placeholder={{ label: "", value: "Interest #1" }}
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'It', value: 'it' },
                                { label: 'Footbole', value: 'footbole' },

                            ]}
                            Icon={() => {
                                return <AntDesign name="down" size={20} color="#909090" style={styles.icon} />;
                            }}
                        />
                    </View>
                    <View style={styles.action}>
                        <Text style={styles.inputHeader}>Interest #2</Text>
                        <RNPickerSelect
                            placeholder={{ label: "", value: "Interest #2" }}
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Marketing', value: 'marketing' },
                                { label: 'Advertising', value: 'advertising' },

                            ]}
                            Icon={() => {
                                return <AntDesign name="down" size={20} color="#909090" style={styles.icon} />;
                            }}
                        />
                    </View>
                    <View style={styles.action}>
                        <Text style={styles.inputHeader}>Interest #3</Text>
                        <RNPickerSelect
                            placeholder={{ label: "", value: "Interest #3" }}
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Education', value: 'education' },
                                { label: 'Training', value: 'training' },

                            ]}
                            Icon={() => {
                                return <AntDesign name="down" size={20} color="#909090" style={styles.icon} />;
                            }}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PriorityPageScreen')}>
                        <View></View>
                        <Text style={styles.textSign}>Next</Text>
                        <AntDesign name="arrowright" size={20} color="white" style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>



    );
};

export default IneterestingAreaScreen;

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
    titlecontent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        width: 160,
        height: 191,
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
        backgroundColor: "white",
        width: 250,
        height: 60,
        borderRadius: 4,
        alignItems: "start"
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

