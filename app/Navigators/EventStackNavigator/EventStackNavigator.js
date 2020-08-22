import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EventScreen from '../../Screens/EventsStackScreens/EventScreen/EventScreen'

const EventStack = createStackNavigator();
const EventStackScreen = () => (
  <EventStack.Navigator>
    <EventStack.Screen name="EventScreen" component={EventScreen} />
  </EventStack.Navigator>
);

export default EventStackScreen;