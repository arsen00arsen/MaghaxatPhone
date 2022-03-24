import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function MediaContent() {
    const video = React.useRef(null);
    const navigation = useNavigation();
    const [status, setStatus] = React.useState({});
    const [columnOrGrid, setcolumnOrGrid] = React.useState("column");

    const ANIMAL_NAMES = [
        {
            id: 1,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
            id: 2,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
            id: 3,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
            id: 4,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
            id: 5,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
            id: 6,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
            id: 7,
            userVedio: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }

    ];


    const changeContainer = (e) => {
        if (e == "column") {
            return (
                setcolumnOrGrid("column")
            )
        } else {
            setcolumnOrGrid("grid")
        }
    }

    let content = ANIMAL_NAMES.map((elem) => {
        if (columnOrGrid === "column") {
            return (
                content = (
                    <View key={elem.id} style={styles.column}>
                        <TouchableOpacity onPress={() => navigation.navigate('RowVideosScreen')}>
                            <Video
                                ref={video}
                                style={styles.columnVideo}
                                source={{
                                    uri: elem.userVedio,
                                }}
                                repeat={true}
                                resizeMode={"cover"}
                                posterResizeMode={"cover"}
                                pictureInPicture={true}
                                poster="https://www.google.com/search?q=transparent+jpg&sxsrf=APq-WBuhQGRedxghxQLAeE5_HI-zKciIgQ:1648042506654&tbm=isch&source=iu&ictx=1&vet=1&fir=Gr4fd-T7rBVMJM%252C5-FfJa1_4j32hM%252C_%253BvqFhm2ZI8cJJsM%252C412peX_gv5qLXM%252C_%253BH58OC4zl-WxlHM%252CLYvy2slgxW3SXM%252C_%253BM34DyP4HCi7FnM%252CJ5VdowxHlSXiVM%252C_%253BMC2dSawylXyVKM%252C8qzBgGJv5Xe1NM%252C_%253BLPMFQy2CcTR0BM%252C5-FfJa1_4j32hM%252C_%253BWCqLOPTtHJM6bM%252C412peX_gv5qLXM%252C_%253BADpVHtSxyU5J2M%252C2qTKEzjeiF-hNM%252C_%253BFvJs3am4KzL5pM%252C_WlMbI96w4X8-M%252C_%253BNQrRXHCHgV4UjM%252CavlVIW_DUxACCM%252C_&usg=AI4_-kQNrrZpbCINp-rGIsqK05ISW5pxzw&sa=X&ved=2ahUKEwjz6rvhrNz2AhX4SfEDHY-sCU8Q9QF6BAgCEAE#imgrc=vqFhm2ZI8cJJsM"
                            />
                            <View style={styles.opacity}>
                                <View style={{
                                    display: "flex", flexDirection: "row",
                                    alignItems: "center", justifyContent: "flex-start", marginTop: "auto", marginBottom: 10
                                }}>
                                    <View style={styles.imgFrame}>
                                        <Image
                                            source={require('../assets/FakeImages/Nikol.png')}
                                            style={styles.userImage}
                                        />
                                    </View>
                                    <Text style={styles.userName}>Nikol Pashinyan</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            )
        } else {
            return (
                content = (

                    <TouchableOpacity onPress={() => navigation.navigate('GridVediosScreen')} style={styles.row} key={elem.id}>
                        <Video
                            ref={video}
                            style={styles.rowVideo}
                            source={{
                                uri: elem.userVedio,
                            }}
                            repeat={true}
                            resizeMode={"cover"}
                            posterResizeMode={"cover"}
                            pictureInPicture={true}
                            poster="https://www.google.com/search?q=transparent+jpg&sxsrf=APq-WBuhQGRedxghxQLAeE5_HI-zKciIgQ:1648042506654&tbm=isch&source=iu&ictx=1&vet=1&fir=Gr4fd-T7rBVMJM%252C5-FfJa1_4j32hM%252C_%253BvqFhm2ZI8cJJsM%252C412peX_gv5qLXM%252C_%253BH58OC4zl-WxlHM%252CLYvy2slgxW3SXM%252C_%253BM34DyP4HCi7FnM%252CJ5VdowxHlSXiVM%252C_%253BMC2dSawylXyVKM%252C8qzBgGJv5Xe1NM%252C_%253BLPMFQy2CcTR0BM%252C5-FfJa1_4j32hM%252C_%253BWCqLOPTtHJM6bM%252C412peX_gv5qLXM%252C_%253BADpVHtSxyU5J2M%252C2qTKEzjeiF-hNM%252C_%253BFvJs3am4KzL5pM%252C_WlMbI96w4X8-M%252C_%253BNQrRXHCHgV4UjM%252CavlVIW_DUxACCM%252C_&usg=AI4_-kQNrrZpbCINp-rGIsqK05ISW5pxzw&sa=X&ved=2ahUKEwjz6rvhrNz2AhX4SfEDHY-sCU8Q9QF6BAgCEAE#imgrc=vqFhm2ZI8cJJsM"
                        />
                        <View style={styles.opacityGrid}>
                            <View style={{
                                display: "flex", flexDirection: "row",
                                alignItems: "center", justifyContent: "flex-start", marginTop: "auto", marginBottom: 10
                            }}>
                                <View style={styles.imgFrame}>
                                    <Image
                                        source={require('../assets/FakeImages/Nikol.png')}
                                        style={styles.userImage}
                                    />
                                </View>
                                <Text style={styles.userName}>Nikol Pashinyan</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                )
            )
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.columnButton} onPress={() => changeContainer('column')}>
                    <Feather name="square" size={22} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => changeContainer('grid')}>
                    <Ionicons name="ios-grid-outline" size={21} color="gray" />
                </TouchableOpacity>
            </View >
            {columnOrGrid == "column" ? content : <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >{content}</View>}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 40
    },
    buttons: {
        width: "100%",
        height: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        top: 0
    },
    columnButton: {
        marginRight: 40,
        width: 30,
        height: 30
    },
    gridButton: {
        width: 30,
        height: 30
    },
    column: {
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
        borderRadius: 8,
        position: "relative"
    },
    columnVideo: {
        alignSelf: 'center',
        width: "100%",
        height: 200,
        borderRadius: 8
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        width: "49%",
        borderRadius: 8
    },
    rowVideo: {
        width: "100%",
        height: 100,
        borderRadius: 8
    },
    opacity: {
        width: "100%",
        height: 200,
        backgroundColor: "black",
        position: "absolute",
        borderRadius: 8,
        opacity: 0.7
    },
    opacityGrid: {
        width: "100%",
        height: 100,
        backgroundColor: "black",
        position: "absolute",
        borderRadius: 8,
        opacity: 0.7
    },
    imgFrame: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#E6E6E6",
        width: 33,
        height: 33,
        marginTop: "auto",
        marginHorizontal: 10
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 999,
        borderColor: "#E6E6E6",
        borderWidth: 3,
    },
    userName: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "600"
    }

});