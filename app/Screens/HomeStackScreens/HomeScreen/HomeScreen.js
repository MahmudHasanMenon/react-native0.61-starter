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
import SearchBar from '../../../Components/shared/searchBar.component'
import { ScaledSheet } from "react-native-size-matters";
import { FlatGrid } from 'react-native-super-grid';
import styles from "./style";


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      logIn: false,
      isLoggedIn: false,
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
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />
          <StyleProvider style={getTheme(material)}>
            <Container style={{ backgroundColor: Colors.white }}>
              <View style={{ marginHorizontal: 20 }}>
                <SearchBar />
              </View>
            </Container>
          </StyleProvider>
        </SafeAreaView>
      </Fragment>
    )
  }
}

export default HomeScreen;