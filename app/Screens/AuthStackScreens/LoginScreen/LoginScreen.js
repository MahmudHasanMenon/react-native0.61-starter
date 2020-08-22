
import React, { useState, useEffect, Fragment } from "react";
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
import Constants from '../../../utils/Constants'

import styles from './style';
import { AuthContext } from "../../../context";

const win = Dimensions.get("window");

const LoginScreen = ( props ) => {
  const { signIn } = React.useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false)
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email*")
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password*")
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [password, setPassword] = useState("")

  useEffect(() => {
  }, [])

  const textChanged = (tag, text) => {

    if (tag === 'email') {
      if (text.length > 0) {
        if (validateEmail(text)) {
          setIsEmailValid(true)
        }
        else {
          setIsEmailValid(true)
        }
      }
      else {
        setIsEmailValid(true)
      }
      setEmail(text)

    }
    else if (tag === 'password') {
      setPassword(text)
    }
  }

  const validateEmail = (email) => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  const doLogin = () => {
    Keyboard.dismiss()
    // this.props.navigation.push('TabsScreen')
    // AsyncStorage.setItem(Constants.USER_ID, userId.toString());
    signIn()
  };

  const forgotPassword = () => {

  }


  const goBack = () => {
    props.navigation.pop(1);
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
        <StyleProvider style={getTheme(material)}>
          <Container>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
              <Content style={{ paddingHorizontal: 25, marginTop: 10, marginBottom: 10 }}>
                <View style={{ marginBottom: 15 }}>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: Fonts.AxiformaRegular, fontSize: 20, color: 'black', marginTop: 5 }}>Welcome to React-Native</Text>
                    <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3', marginTop: 5 }}>This is a starter project</Text>
                    <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3', marginTop: 5 }}>All set-up for react-native and react navigation and native base</Text>
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
                    placeholder={emailPlaceholder}
                    placeholderTextColor='#afafaf'
                    onChangeText={(text) => textChanged('email', text)}
                    value={email}
                    style={[styles.textInputView]}
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
                    placeholder={passwordPlaceholder}
                    placeholderTextColor='#afafaf'
                    secureTextEntry={true}
                    onChangeText={password => textChanged('password', password)}
                    value={password}
                    style={[styles.textInputView, { borderBottomColor: '#c9c9c9' }]}
                  />
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                  <TouchableOpacity onPress={() => { forgotPassword() }}>
                    <Text style={styles.forgotPasswordText}> Forgot your password? </Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.raisedButton, { marginBottom: 20 }]}>
                  <TouchableOpacity onPress={() => { doLogin() }}>
                    <Text style={[styles.btnText, styles.whiteColor]}>Log in</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row' }}>

                  <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3' }}> Don't have an account?</Text>
                  <TouchableOpacity onPress={() => props.navigation.push("SignupScreen")}>
                    <Text style={{
                      fontFamily: Fonts.PoppinsMedium,
                      color: Colors.primaryColor, fontSize: 14
                    }}> Sign Up</Text>
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

export default LoginScreen;


