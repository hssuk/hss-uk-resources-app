import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { List, Card, Text, Layout, TabBar, Tab, Icon } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Admin from "../screens/shareerik/Admin.js";
import Vishays from "../screens/shareerik/Vishays.js";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab
      icon={(props) => (
        <Icon {...props} name="grid-outline" pack="eva"/>
      )}
      title='Vishays'
    />
    <Tab
      icon={(props) => (
        <Icon {...props} name="file-outline" pack="eva"/>
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
