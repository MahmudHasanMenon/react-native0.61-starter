
import React, { Component, Fragment } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    AsyncStorage,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    InteractionManager,
    Image,
    Keyboard
} from "react-native";
import {
    Container, Content, Button, StyleProvider, CheckBox, ListItem, Input, Label, Body, Icon, Title, Picker, Item
} from "native-base";
import getTheme from "../../../../native-base-theme/components";
import material from "../../../../native-base-theme/variables/material";
import Colors from "../../../res/colors";
import {
    Fonts
} from "../../../utils/fonts"

import styles from './style';

const win = Dimensions.get("window");

class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            emailPlaceholder: "Email*",
            passwordPlaceholder: "Password*",
            confirmPasswordPlaceholder: "Confirm Password",
            fullName: "",
            mobile: "",
            email: "",
            password: "",
            customPopupSuccessVisibility: false,
            customPopupErrorVisibility: false,
            popupMessage: '',
            isEmailValid: true,
            loginTitle: "Login",
            modalVisible: false,
            userInfo: '',
            isAccepted: false
        };
    }

    componentDidMount = async () => {
        // this.setState({
        //   rememberMeToken: await AsyncStorage.getItem(Constants.REMEMBER_ME_TOKEN)
        // });
    };

    textChanged = (tag, text) => {

        if (tag === 'email') {
            if (text.length > 0) {
                if (this.validateEmail(text)) {
                    this.setState({ isEmailValid: true })
                }
                else {
                    this.setState({ isEmailValid: false })
                }
            }
            else {
                this.setState({ isEmailValid: true })
            }
            this.setState({ email: text });
        }
        else if (tag === 'password') {
            this.setState({ password: text });
        }
    }

    validateEmail(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    doLogin = () => {
        Keyboard.dismiss()
       
    };

    forgotPassword = () => {

    }

    onCheckboxValueChanged() {
        this.setState({ isAccepted: !this.state.isAccepted })
    }


    goBack = () => {
        this.props.navigation.pop(1);
    };


    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
                    <StyleProvider style={getTheme(material)}>
                        <Container>
                            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                                <Content style={{ paddingHorizontal: 25, marginTop: 0, marginBottom: 10 }}>
                                    <View style={{ marginBottom: 15 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            
                                            <Text style={{ fontFamily: Fonts.AxiformaRegular, fontSize: 20, color: 'black', marginTop: 5 }}>Sign Up to your project</Text>
                                        </View>
                                    </View>

                                    <View style={styles.inputTextContainer}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Image
                                                // style={{ width: 100, height: 100 }}
                                                source={require('../../../res/images/Mail_Gray.png')}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            autoCapitalize="none"
                                            placeholder="FullName"
                                            placeholderTextColor='#afafaf'
                                            onChangeText={(text) => this.textChanged('email', text)}
                                            value={this.state.fullName}
                                            style={[styles.textInputView, { borderBottomColor: this.state.isEmailValid ? '#c9c9c9' : 'red' }]}
                                        />
                                    </View>

                                    <View style={styles.inputTextContainer}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Image
                                                // style={{ width: 100, height: 100 }}
                                                source={require('../../../res/images/Mail_Gray.png')}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            autoCapitalize="none"
                                            placeholder="MobileNumber"
                                            placeholderTextColor='#afafaf'
                                            onChangeText={(text) => this.textChanged('email', text)}
                                            value={this.state.mobileNumber}
                                            style={[styles.textInputView, { borderBottomColor: this.state.isEmailValid ? '#c9c9c9' : 'red' }]}
                                        />
                                    </View>

                                    <View style={styles.inputTextContainer}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Image
                                                // style={{ width: 100, height: 100 }}
                                                source={require('../../../res/images/Mail_Gray.png')}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            autoCapitalize="none"
                                            placeholder={this.state.emailPlaceholder}
                                            placeholderTextColor='#afafaf'
                                            onChangeText={(text) => this.textChanged('email', text)}
                                            value={this.state.email}
                                            style={[styles.textInputView, { borderBottomColor: this.state.isEmailValid ? '#c9c9c9' : 'red' }]}
                                        />
                                    </View>

                                    <View style={styles.inputTextContainer}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Image
                                                // style={{ width: 100, height: 100 }}
                                                source={require('../../../res/images/Lock_Gray.png')}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            placeholder={this.state.passwordPlaceholder}
                                            placeholderTextColor='#afafaf'
                                            secureTextEntry={true}
                                            onChangeText={password => this.textChanged('password', password)}
                                            value={this.state.password}
                                            style={[styles.textInputView, { borderBottomColor: '#c9c9c9' }]}
                                        />
                                    </View>

                                    <View style={styles.inputTextContainer}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Image
                                                // style={{ width: 100, height: 100 }}
                                                source={require('../../../res/images/Lock_Gray.png')}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            placeholder={this.state.confirmPasswordPlaceholder}
                                            placeholderTextColor='#afafaf'
                                            secureTextEntry={true}
                                            onChangeText={password => this.textChanged('password', password)}
                                            value={this.state.password}
                                            style={[styles.textInputView, { borderBottomColor: '#c9c9c9' }]}
                                        />
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                        <CheckBox
                                            style={{ left: 0, marginTop: 0, paddingBottom: 0, borderRadius: 2 }}
                                            checked={this.state.isAccepted}
                                            onPress={() => this.onCheckboxValueChanged()}
                                        />

                                        <Text style={[styles.TermsAndPolicy, { paddingLeft: 8 }]}>Accept our <Text
                                            style={{ color: Colors.primaryColor }}>Terms</Text> and
                                        <Text style={{ color: Colors.primaryColor }}> conditions</Text>
                                        </Text>
                                    </View>

                                    <View style={[styles.raisedButton, { marginBottom: 20 }]}>
                                        <TouchableOpacity onPress={() => { this.doLogin() }}>
                                            <Text style={[styles.btnText, styles.whiteColor]}>Sign up</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>

                                        <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3' }}>Already have an account?</Text>
                                        <TouchableOpacity onPress={() => { this.props.navigation.push("LoginScreen"); }}>
                                            <Text style={{
                                                fontFamily: Fonts.PoppinsMedium,
                                                color: Colors.primaryColor, fontSize: 14
                                            }}> Login</Text>
                                        </TouchableOpacity>

                                    </View>
                                </Content>
                            </View>
                        </Container>
                    </StyleProvider>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default SignupScreen;

