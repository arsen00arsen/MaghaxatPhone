import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';


export default function UploadImage(props) {
    let [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
            </View>
        );
    }

    return (
        <View style={{elevation: 2, backgroundColor: "#efefef", position: "relative", borderRadius: 999, overflow: 'hidden', width: props.width, height: props.height  }}>

            <View style={styles.uploadBtnContainer}>
                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <AntDesign name="camera" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     elevation: 2,
    //     height: 180,
    //     width: 180,
    //     backgroundColor: '#efefef',
    //     position: 'relative',
    //     borderRadius: 999,
    //     overflow: ,
    // },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },

    thumbnail: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    uploadBtnContainer: {
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#88673A',
        width: '100%',
        height: '25%',
    },
});
