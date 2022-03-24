// import React from 'react';
// import {View, Text, Image,  StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import HeaderBackSearch from '../../components/HeaderComponent/HeaderBackSearch';
// import { useTheme } from '@react-navigation/native';

// const SearchResultScreen = () => {
//     const navigation = useNavigation();
//     const theme = useTheme();

//     const ANIMAL_NAMES = [
//         {
//             id: 1,
//             name: 'Nikol Pashinyan',
//             // userImage: "../../assets/FakeImages/Nikol.png"
//         },
//         {
//             id: 2,
//             name: 'Robert Qocharyan',
//         },
//         {
//             id: 3,
//             name: 'Anjela Sargsyan',
//         },
//         {
//             id: 4,
//             name: 'Serj Sargsyan',
//         },
//         {
//             id: 5,
//             name: 'Hayk Marutyan',
//         },
//         {
//             id: 6,
//             name: 'Levon Ter-Petrosyan',
//         },
//         {
//             id: 7,
//             name: 'Vazgen Sargsyan',
//         }

//     ];
//     let content = ANIMAL_NAMES.map((elem, index) => {
//         return (
//             <View key={elem.id} style={styles.users}>
//                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccounProfiletScreen')}>
//                     <View
//                         style={styles.userProfile}
//                     >
//                         <View style={styles.imgFrame}>
//                             <Image
//                                 source={require('../../assets/FakeImages/Nikol.png')}
//                                 style={styles.userImage}
//                             />
//                         </View>
//                         <Text style={styles.userName}>{elem.name}</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>

//         )
//     })


//     return (
//         <View style={styles.container}>
//             <HeaderBackSearch />
//             <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} >
//                 <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >
//                     {content}
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// export default SearchResultScreen;

// const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flexDirection: "row",
//         alignItems: 'center',
//         justifyContent: `space-between`,
//         width: "100%",
//         minHeight: 40,
//         marginVertical: 20
//     },
//     users: {
//         width: "100%",
//         marginBottom: 10
//     },
//     userProfile: {
//         width: "100%",
//         height: 75,
//         display: "flex",
//         borderRadius: 8,
//         flexDirection: "row",
//         justifyContent: "flex-start",
//         alignItems: "center",
    
//         backgroundColor: "white",

//         // marginBottom: 20
//     },
//     imgFrame: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 50,
//         borderWidth: 4,
//         borderColor: "#E6E6E6",
//         width: 50,
//         height: 50,
//         marginHorizontal: 20
//     },
//     userImage: {
//         width: 43,
//         height: 43,
//         borderRadius: 50,

//     },
//     userName: {
//         fontSize: 16,
//         color: "#727272",
//         textAlign: "left",
//         fontWeight: "600"
//     }

// });


import React from 'react';
import { View, Text, Image,  StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderBackSearch from '../../components/HeaderComponent/HeaderBackSearch';




const FilterResultScreen = ({ navigation }) => {
    const theme = useTheme();

    const ANIMAL_NAMES = [
        {
            id: 1,
            name: 'Nikol Pashinyan',
            // userImage: "../../assets/FakeImages/Nikol.png"
        },
        {
            id: 2,
            name: 'Robert Qocharyan',
        },
        {
            id: 3,
            name: 'Anjela Sargsyan',
        },
        {
            id: 4,
            name: 'Serj Sargsyan',
        },
        {
            id: 5,
            name: 'Hayk Marutyan',
        },
        {
            id: 6,
            name: 'Levon Ter-Petrosyan',
        },
        {
            id: 7,
            name: 'Vazgen Sargsyan',
        }

    ];
    let content = ANIMAL_NAMES.map((elem, index) => {
        return (
            <View key={elem.id} style={styles.users}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccounProfiletScreen')}>
                    <View
                        style={styles.userProfile}
                    >
                        <View style={styles.imgFrame}>
                            <Image
                                source={require('../../assets/FakeImages/Nikol.png')}
                                style={styles.userImage}
                            />
                        </View>
                        <Text style={styles.userName}>{elem.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle={theme.dark ? "light-content" : "dark-content"} />
            <HeaderBackSearch />
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} >
                <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >
                    {content}
                </View>
            </ScrollView>
        </View>
    );
};

export default FilterResultScreen;

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
    users: {
        width: "100%",
        marginBottom: 10
    },
    userProfile: {
        width: "100%",
        height: 75,
        display: "flex",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    
        backgroundColor: "white",

        // marginBottom: 20
    },
    imgFrame: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#E6E6E6",
        width: 50,
        height: 50,
        marginHorizontal: 20
    },
    userImage: {
        width: 43,
        height: 43,
        borderRadius: 50,

    },
    userName: {
        fontSize: 16,
        color: "#727272",
        textAlign: "left",
        fontWeight: "600"
    }

});