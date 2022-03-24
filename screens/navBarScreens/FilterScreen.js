import React from 'react';
import FilterHead from '../../components/HeaderComponent/FilterHead';
import { View, Text, StyleSheet,  ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
const FilterScreen = () => {
    const theme = useTheme();
    const [data, setData] = React.useState({
        ineterstingAreas: "",
        ineterstingArea1: "",
        ineterstingArea2: "",
        ineterstingArea3: "",
        ineterstingArea4: "",
        ineterstingArea5: ""
    });

    const inputChange = ({ val, nameInput }) => {
        if (nameInput == "ineterstingArea1") {
            setData({
                ...data,
                ineterstingArea1: val,
            });
        } else if (nameInput == "ineterstingAreas") {
            setData({
                ...data,
                ineterstingAreas: val,
            });
        } else if (nameInput == "ineterstingArea2") {
            setData({
                ...data,
                ineterstingArea2: val,
            });
        } else if (nameInput == "ineterstingArea3") {
            setData({
                ...data,
                ineterstingArea3: val,
            });
        } else if (nameInput == "ineterstingArea4") {
            setData({
                ...data,
                ineterstingArea4: val,
            });
        } else if (nameInput == "ineterstingArea5") {
            setData({
                ...data,
                ineterstingArea5: val,
            });
        }
    }

    return (
        <View style={styles.container}>
            <FilterHead />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Interested areas</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interested areas" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => inputChange({ value, nameInput: "ineterstingAreas" })}
                        items={[
                            { label: 'It', value: 'it' },
                            { label: 'Footbole', value: 'footbole' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Interesting Area 1</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interesting Area 1" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => inputChange({ value, nameInput: "ineterstingArea1" })}
                        items={[
                            { label: 'It', value: 'it' },
                            { label: 'Footbole', value: 'footbole' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Interesting Area 2</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interesting Area 2" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => inputChange({ value, nameInput: "ineterstingArea2" })}
                        items={[
                            { label: 'It', value: 'it' },
                            { label: 'Footbole', value: 'footbole' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Interesting Area 3</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interesting Area 3" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => inputChange({ value, nameInput: "ineterstingArea3" })}
                        items={[
                            { label: 'It', value: 'it' },
                            { label: 'Footbole', value: 'footbole' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Interesting Area 4</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interesting Area 4" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => inputChange({ value, nameInput: "ineterstingArea4" })}
                        items={[
                            { label: 'It', value: 'it' },
                            { label: 'Footbole', value: 'footbole' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.inputHeader}>Interesting Area 5</Text>
                    <RNPickerSelect
                        placeholder={{ label: "", value: "Interesting Area 5" }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 20,
                            },
                        }}
                        onValueChange={(value) => inputChange({ value, nameInput: "ineterstingArea5" })}
                        items={[
                            { label: 'It', value: 'it' },
                            { label: 'Footbole', value: 'footbole' },

                        ]}
                        Icon={() => {
                            return <AntDesign name="down" size={18} color="#909090" style={styles.icon} />;
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 15,
        position: "relative"
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
    button: {
        width: "100%",
        height: 60,
        borderRadius: 8,
        backgroundColor: "#BB9E79",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "800",
        color: "#FFFFFF"
    }
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
