
import React, { Component, Fragment } from 'react'

import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    Alert,
    ImageBackground,
    Image, TouchableOpacity, AsyncStorage, Linking, Platform, SafeAreaView, BackHandler, StatusBar
} from 'react-native';

import {
    Container, Content, Button, StyleProvider, Form, Item, Input, Label, Icon, Picker
} from "native-base";

import getTheme from "../../../../native-base-theme/components";
import material from "../../../../native-base-theme/variables/material";

import Colors from "../../../res/colors";
import {
    Fonts
} from "../../../utils/fonts"

import styles from "./style";


class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
            logIn: false
        }

    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
        }
    }

    statusBar() {
        if (Platform.OS === 'ios') {
            return <StatusBar barStyle="light-content" translucent={true} />
        }
        else {
            return <StatusBar translucent={true} backgroundColor={Colors.white} />
        }
    }

    signUpPressed() {
        this.props.navigation.push("SignupScreen");
    }

    loginPressed() {
        this.props.navigation.push("LoginScreen");
    }

    onBackButtonPressed() {
        return true;
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: Colors.white }} />
                <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                    <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />
                    {/* {
                        this.statusBar()
                    } */}
                    <StyleProvider style={getTheme(material)}>
                        <Container style={{ backgroundColor: Colors.white }}>
                            <View style={{ flexBasis: '57%' }}>
                                <View style={{ flex: 1, marginVertical: 25, marginHorizontal: 20 }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontFamily: Fonts.AxiformaRegular, fontSize: 20, color: 'black', marginTop: 5 }}>Welcome to React-Native</Text>
                                        <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3', marginTop: 5 }}>This is a starter project</Text>
                                        <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3', marginTop: 5 }}>All set-up for react-native and react navigation and native base</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.bottomSection}>
                                <View style={{ marginTop: 10 }}>
                                    <View style={[styles.raisedButton, { marginBottom: 20, justifyContent: 'center' }]}>
                                        <TouchableOpacity onPress={() => this.loginPressed()}>
                                            <Text style={[styles.btnText, styles.whiteColor]}>Login</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[styles.outlineButton, { justifyContent: 'center' }]}>
                                        <TouchableOpacity onPress={() => this.signUpPressed()}>
                                            <Text style={[styles.btnText, styles.primaryColor]}>Signup</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Container>
                    </StyleProvider>
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default WelcomeScreen;