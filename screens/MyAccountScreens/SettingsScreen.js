
import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderBackSearch from '../../components/HeaderComponent/HeaderBackSearch';
import MyaccountUsserInfor from '../../components/MyaccountUsserInfor';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
    const theme = useTheme();


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle={theme.dark ? "light-content" : "dark-content"} />
            <HeaderBackSearch />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                <View style={{ marginBottom: 20 }}>
                    <MyaccountUsserInfor />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Language</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interesting Area 5" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'English', value: 'english' },
                            { label: 'Armenian', value: 'armenian' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Password</Text>
                    <TextInput
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => console.log(val)}
                        placeholder="Change Password"
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>About</Text>
                    <TextInput
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => console.log(val)}
                        placeholder="About Us"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SettingsScreen;

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
    textInput: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        color: '#222222',
        height: "100%",
        width: "100%",
        borderRadius: 8,
        fontSize: 14,
        fontWeight: "700"
    },
    action: {
        flexDirection: 'column',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: 60,
        borderRadius: 8,
        alignItems: "flex-start"
    },
    inputHeader: {
        fontSize: 12,
        color: "#828282",
        paddingTop: 10,
        paddingLeft: 12
    },
    icon: {
        paddingLeft: 10,
        bottom: 15
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