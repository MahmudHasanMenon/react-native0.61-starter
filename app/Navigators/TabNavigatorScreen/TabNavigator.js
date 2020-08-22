import React, { Component } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    Alert,
    ImageBackground,
    Image, TouchableOpacity, AsyncStorage, Linking, Platform, SafeAreaView, BackHandler, StatusBar
  } from 'react-native';

import HomeStackScreen from '../HomeStackNavigator/HomeStackNavigator'
import EventStackScreen from '../EventStackNavigator/EventStackNavigator'
import ProfileStackScreen from '../ProfileStackNavigator/ProfileStackNavigator'

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#0099ff',
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image
            style={[
              {
                tintColor: color, width: 26,
                height: 26,
                resizeMode: "contain"
              }
            ]}
            source={require('../../res/images/Home_Gray.png')}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="Events"
      component={EventStackScreen}
      options={{
        tabBarLabel: 'Events',
        tabBarIcon: ({ color, size }) => (
          <Image
            style={[
              {
                tintColor: color, width: 26,
                height: 26,
                resizeMode: "contain"
              }
            ]}
            source={require('../../res/images/Events_Gray.png')}
          />
        ),
      }} />   
    <Tabs.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'profile',
        tabBarIcon: ({ color, size }) => (
          <Image
            style={[
              {
                tintColor: color, width: 26,
                height: 26,
                resizeMode: "contain"
              }
            ]}
            source={require('../../res/images/User_Gray.png')}
            resizeMode="contain"
          />
        ),
      }} />
  </Tabs.Navigator>
);

export default TabsScreen