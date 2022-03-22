import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, FlatList, ImageBackground, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PostsComponent from '../../components/PostsComponent';
import HeaderChatSearch from '../../components/HeaderComponent/HeaderChatSearch';



const HomeScreen = ({ navigation }) => {
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

  const ItemRender = (item) => (

    <View style={styles.usersProfile}>
      <ImageBackground source={require("../../assets/FakeImages/Nikol.png")} resizeMode="cover" style={styles.usersProfileBGimage}>
      </ImageBackground>
      <View style={styles.info}>
        <Image
          style={styles.img}
          source={require("../../assets/FakeImages/Nikol.png")}
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </View>
  );

  const Separator = () => {
    return (
      <View
        style={{
          height: 50,
          width: 5,
          backgroundColor: "white",
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle={theme.dark ? "light-content" : "dark-content"} />
      <HeaderChatSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.lastUsersContainerBody}>
          <View style={styles.lastUsersContainer}>
            <View style={styles.lastUsersContainercontent}>
              <View style={styles.lastUsersContainerSmall}></View>
              <Text style={styles.lastUsersContainerText}>Last Signed Users</Text>
            </View>

          </View>
          <SafeAreaView style={styles.flatListContainer}>
            <FlatList
              data={ANIMAL_NAMES}
              renderItem={({ item }) => <ItemRender name={item.name} userImage={item.userImage} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
              horizontal={true}
            />
          </SafeAreaView>
        </View>
        <View style={styles.lastUsersContainer}>
          <View style={styles.lastUsersContainercontent}>
            <View style={styles.lastUsersContainerSmall}></View>
            <Text style={styles.lastUsersContainerText}>Popular Posts</Text>
          </View>
        </View>
          <PostsComponent />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: '#F2F2F2',
    height: "100%"
  },
  lastUsersContainer: {
    display: "flex",
    minWidth: "100%",
    height: 57,
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#88673A",
    justifyContent: "center"
  },
  lastUsersContainerSmall: {
    height: 30,
    width: 8,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#ACA093",
    marginRight: 10
  },
  lastUsersContainerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#838383"
  },
  lastUsersContainercontent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  },

  usersProfile: {
    width: 80,
    height: 170,
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
  },

  itemText: {
    fontSize: 8,
    width: 48,
    color: '#464646',

  },
  flatListContainer: {
    paddingVertical: 15
  },
  img: {
    height: 15,
    width: 15,
    borderRadius: 50,
    marginHorizontal: 5
  },
  usersProfileBGimage: {
    flex: 1,
    width: "100%",
  },
  info: {
    height: 30,
    backgroundColor: "#DEDEDE",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  }



});
