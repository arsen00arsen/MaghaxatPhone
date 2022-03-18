import React from 'react';
import { View, Text, Image,Button,  StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderFilterSearch from '../../components/HeaderFilterSearch';
import { Fontisto, Octicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const MediaScreen = ({ navigation }) => {
  const theme = useTheme();
  const [text, onChangeText] = React.useState("");
  const [image, setImage] = React.useState(null)
  // const [flexGrid, setflexGrid] = React.useState("flex");

  // const changeContainer = (flexORgrid) => {
  //   if (flexORgrid == "flex") {
  //     return (
  //       setflexGrid("flex")
  //     )
  //   } else {
  //     setflexGrid("grid")
  //   }
  // }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle={theme.dark ? "light-content" : "dark-content"} />
      <HeaderFilterSearch />

      <View style={styles.postContainer}>
        <View style={styles.postBody}>
          <View style={styles.addPost}>
            <View style={styles.imgBody}>
              <Image
                style={styles.img}
                source={require("../../assets/FakeImages/Nikol.png")}
              />
            </View>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={`Type your post message ...`}
              />
            </SafeAreaView>
          </View>
          <View style={styles.addImgVedio}>
            <TouchableOpacity style={styles.postImg} onPress={pickImage}>
              <Fontisto name="camera" size={24} color="#B9B9B9" />
              <Text style={styles.textAdd}>Add Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postVedio}>
              <Octicons name="device-camera-video" size={24} color="#B9B9B9" />
              <Text style={styles.textAdd}>Add Vedio</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* <TouchableOpacity style={styles.flex} onPress={() => changeContainer('flex')}>

          <Text style={styles.textAdd}>Flex</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex} onPress={() => changeContainer('grid')}>

          <Text style={styles.textAdd}>Grid</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={styles.items1}>
            <View style={(flexGrid === "grid") ? styles.itemsss : styles.itemsssFlex}>
              <View style={(flexGrid === "grid") ? styles.items : styles.itemsFlex}></View>
              <View style={(flexGrid === "grid") ? styles.items : styles.itemsFlex}></View>
            </View>
            <View style={(flexGrid === "grid") ? styles.itemsss : styles.itemsssFlex}>
              <View style={(flexGrid === "grid") ? styles.items : styles.itemsFlex}></View>
              <View style={(flexGrid === "grid") ? styles.items : styles.itemsFlex}></View>
            </View>
          </View>
          <View style={styles.items2}></View>
        </View> */}

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      
          {image && <Image source={{ uri: image }} style={{ width: 160, height: 100 }} />}
        </View>
      </View>
    </View>
  );
};

export default MediaScreen;

const styles = StyleSheet.create({

  // section: {
  //   display: "flex",
  //   flexDirection: "column"
  // },

  // items: {
  //   width: "49%",
  //   height: 40,
  //   backgroundColor: "red"
  // },
  // itemsFlex: {
  //   width: "100%",
  //   height: 40,
  //   backgroundColor: "red",
  //   marginBottom: 20
  // }

  // ,
  // items1: {
  //   display: "flex",
  //   flexDirection: "column"
  // },
  // items2: {
  //   width: "100%",
  //   height: 40,
  //   backgroundColor: "green"
  // },

  // itemsss: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 20,
  //   marginTop: 20
  // },
  // itemsssFlex: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   marginBottom: 20,
  //   marginTop: 20
  // },
  // flex: {
  //   width: 40,
  //   height: 40,
  //   margin: 20
  // },






  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: 'white',
    height: "100%"
  },
  postContainer: {
    width: "100%",
    height: "90%"
  },
  postBody: {
    width: "100%",
    height: 125,
    backgroundColor: "#E8E5E1",
    borderRadius: 8
  },
  addPost: {
    padding: 18,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "65%"
  },
  imgBody: {
    width: 71,
    height: 71,
    borderColor: "silver",
    borderWidth: 4,
    borderRadius: 50,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  img: {
    position: "absolute",
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  input: {
    color: "#CECECE",
    fontSize: 14
  },
  addImgVedio: {
    height: "35%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  postImg: {
    width: "50%",
    height: "100%",
    backgroundColor: "#DEDCDC",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRightWidth: 2,
    borderColor: "silver",
    borderBottomLeftRadius: 8,
    paddingLeft: 10
  },
  postVedio: {
    width: "50%",
    height: "100%",
    backgroundColor: "#DEDCDC",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomRightRadius: 8,
    paddingLeft: 10,
  },
  textAdd: {
    color: "#B9B9B9",
    fontSize: 10,
    fontWeight: "bold",
    paddingLeft: 20
  }


});
