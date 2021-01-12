import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { List, Card, Text, Layout, TabBar, Tab } from '@ui-kitten/components';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Amrutvachan from "../screens/bauddhik/Amrutvachan.js";
import Geet from "../screens/bauddhik/Geets.js";
import Subhashita from "../screens/bauddhik/Subhashita.js";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='Amrutvachan' />
    <Tab title='Geet' />
    <Tab title='Subhashita' />
  </TabBar>
);

export default function Bauddhik() {
  return (
    <Navigator
      tabBar={props => <TopTabBar {...props} />}
    >
        <Screen name='Amrutvachan' component={Amrutvachan} />
        <Screen name='Geet' component={Geet} />
        <Screen name='Subhashita' component={Subhashita} />
    </Navigator>
  );
}
