import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from '../../Screens/AuthStackScreens/WelcomeScreen/WelcomeScreen'
import LoginScreen from '../../Screens/AuthStackScreens/LoginScreen/LoginScreen'
import SignupScreen from '../../Screens/AuthStackScreens/SignupScreen/SignupScreen'

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="WelcomeScreen">
    <AuthStack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ title: "Login" }}
    />
    <AuthStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ title: "Login" }}
    />
    <AuthStack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{ title: "sign Up" }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;