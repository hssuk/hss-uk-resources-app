import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { List, Card, Text, Layout, TabBar, Tab } from '@ui-kitten/components';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Admin from "../screens/shareerik/Admin.js";
import Vishays from "../screens/shareerik/Vishays.js";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab
      icon={() => (
        <Icon size={22} name="view-grid-outline"/>
      )}
      title='Vishays'
    />
    <Tab
      icon={() => (
        <Icon size={22} name="text-box"/>
      )}
      title='Template'
    />
  </TabBar>
);

export default function Shareerik() {
  return (
    <Navigator
      tabBar={props => <TopTabBar {...props} />}
    >
      <Screen name='Vishays' component={Vishays} />
      <Screen name='Admin' component={Admin} />
    </Navigator>
  );
}
