import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Feather, Ionicons } from '@expo/vector-icons';



export default function MediaContent() {
    const video = React.useRef(null);
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
        console.log(e)
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
                        <Video
                            ref={video}
                            style={styles.columnVideo}
                            source={{
                                uri: elem.userVedio,
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>
                )
            )
        } else {
            return (
                content = (
                    <View key={elem.id} style={styles.row}>
                        <Video
                            ref={video}
                            style={styles.rowVideo}
                            source={{
                                uri: elem.userVedio,
                            }}
                            useNativeControls
                            // resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>
                )
            )
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.flex} onPress={() => changeContainer('column')}>
                <Feather name="square" size={22} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.flex} onPress={() => changeContainer('grid')}>
                <Ionicons name="ios-grid-outline" size={21} color="gray" />
                </TouchableOpacity>
            </View>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 40
    },
    buttons: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"

    },
    flex: {
        marginRight: 40,
    },
    column: {
        display: "flex",
        flexDirection: "column",
        marginTop: 30
    },
    columnVideo: {
        alignSelf: 'center',
        width: "100%",
        height: 100,
        marginBottom: 20,
       
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 30
    },
    rowVideo: {
        width: "30%",
        height: 100,
        marginBottom: 20,
    }
});