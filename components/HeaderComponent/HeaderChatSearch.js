// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import { Icon, withBadge } from 'react-native-elements';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import SearchBar from "react-native-dynamic-search-bar";
// import * as Animatable from 'react-native-animatable';
// const BadgedIcon = withBadge(2)(Icon);

// const HeaderChatSearch = () => {
//     const navigation = useNavigation();
//     const [openSearch, setopenSearch] = React.useState(false);

//     const openToggle = () => {
//         setopenSearch(!openSearch)
//     }

//     let content
//     if (openSearch == false) {
//         content = (
//             <Animatable.View 
//             animation="slideInDown"
//             duraton="500"
//             style={styles.container}
//            >
//                 <LinearGradient
//                     style={styles.badgedIcon}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 1 }}
//                     locations={[0.0, 0.9]}
//                     colors={['#D1C7B9', '#D2C8B9']}>
//                     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatScreen')}>
//                         <MaterialCommunityIcons name="message-outline" size={22} color="#fff" />
//                     </TouchableOpacity>

//                 </LinearGradient>
//                 <Image
                   
//                     source={require('../../assets/logoHeader.png')}
//                     style={styles.logo}
//                     resizeMode="stretch"
//                 />
//                 <LinearGradient
//                     style={styles.searchIcon}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 1 }}
//                     locations={[0.0, 0.3]}
//                     colors={['#cccccc', '#c4c4c4']}>
//                     <TouchableOpacity style={styles.button} onPress={() => openToggle()}>
//                         <Feather name="search" size={24} color="black" />
//                     </TouchableOpacity>
//                 </LinearGradient>
//             </Animatable.View>
//         )
//     } else {
//         content = (
//             <Animatable.View 
//             animation="bounceInDown"
//             duraton="1500"
//             style={styles.container}
//            >
//             <SearchBar
//                 placeholder="Search here"
//                 height={50}
//                 onChangeText={(text) => {
//                     console.log(text);
//                 }}
//                 onPressCancel={() => {
//                     this.filterList("");
//                 }}
//                 onPress={() => setopenSearch(false)}
//             />
//             </Animatable.View>
//         )
//     }



//     return (
//         <>
//             {content}
//         </>
//     );
// };

// export default HeaderChatSearch;

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
//     logo: {
//         width: 146,
//     },
//     badgedIcon: {
//         display: `flex`,
//         alignItems: 'center',
//         justifyContent: `center`,
//         width: 47,
//         height: 47,
//         borderRadius: 5
//     },
//     searchIcon: {
//         display: `flex`,
//         alignItems: 'center',
//         justifyContent: `center`,
//         width: 47,
//         height: 47,
//         borderRadius: 5,
//     },
//     button: {
//         display: `flex`,
//         alignItems: 'center',
//         justifyContent: `center`,
//         width: "100%",
//         height: "100%"
//     },
//     searchbody: {
//         width: "100%",
//         height: 47,
//         borderColor: "silver",
//         borderWidth: 1
//     }
// });


