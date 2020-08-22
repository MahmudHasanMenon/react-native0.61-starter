import React, { Component } from "react";
import {
    ActivityIndicator,
    View,
    Text,
    Image,
    Modal,
    StyleSheet,
    StatusBar,
    Platform
} from "react-native";
import Colors from "../../res/colors";
import {
    Fonts
} from "../../utils/fonts"

const DataLoader = (props) => {
    const {
        show,
        color = "#01ACE8",
        backgroundColor = "white",
        dimLights = 0.1,
        loadingMessage = "Loading..."
    } = props;
    return (

        <View
            style={{
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: `rgba(255, 255, 255, ${dimLights})`
            }}
        >
            <View
                style={{
                    width: '50%',
                    height: 80,
                    borderRadius: 8,
                    backgroundColor: `${backgroundColor}`,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: 'row'
                }}
            >
                 { show && <ActivityIndicator animating={true} color={color} size={'large'} />  }
                <Text style={{ fontFamily: Fonts.PoppinsRegular, fontSize: 17, marginLeft: 12, color: `${color}` }}>{loadingMessage}</Text>
            </View>
        </View>

    );
};

export default DataLoader;