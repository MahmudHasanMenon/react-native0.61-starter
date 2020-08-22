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

import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";

import Colors from "../../res/colors";
import {
  Fonts
} from "../../utils/fonts"
import { ScaledSheet } from "react-native-size-matters";
import DataLoader from "../../Components/shared/dataLoader"
import styles from "./style";


class InitialScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      logIn: false,
      isLoggedIn: false
    }

  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    }
  }

  onBackButtonPressed() {
    return true;
  }

  statusBar() {
    if (Platform.OS === 'ios') {
      return <StatusBar barStyle="light-content" translucent={true} />
    }
    else {
      return <StatusBar barStyle="light-content" backgroundColor={Colors.white} />
    }
  }


  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: Colors.white }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
          {
            this.statusBar()
          }
          <StyleProvider style={getTheme(material)}>
            <Container style={{ backgroundColor: Colors.white }}>
              <View style={{ flexBasis: '67%' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                  <Text style={{ fontFamily: Fonts.AxiformaRegular, fontSize: 20, color: 'black', marginTop: 5 }}>WELCOME TO React-Native</Text>
                  <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3', marginTop: 5 }}>This is a starter project</Text>
                  <Text style={{ fontFamily: Fonts.PoppinsLight, fontSize: 14, color: '#9394B3', marginTop: 5 }}>All set-up for react-native and react navigation and native base</Text>
                </View>
              </View>
              <View>
                <DataLoader show={true} />
              </View>
            </Container>
          </StyleProvider>
        </SafeAreaView>
      </Fragment>
    )
  }
}

export default InitialScreen;