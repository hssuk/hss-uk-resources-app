import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Card, Text, Layout, TabBar, Tab,  Icon} from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import CodeOfConduct from "../screens/vyavastha/CodeOfConduct.js";
import SafeToTrustPolicy from "../screens/vyavastha/SafeToTrust.js";
import HealthAndSafetyPolicy from "../screens/vyavastha/HealthAndSafety.js";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab
      title='Code of Conduct'
    />
    <Tab
      title='Safe to Trust'
    />
    <Tab
      title='Health & Safety'
    />
  </TabBar>
);

export default function Vyavastha() {
  return (
    <Navigator
      tabBar={props => <TopTabBar {...props} />}
    >
      <Screen name='CodeOfConduct' component={CodeOfConduct} />
      <Screen name='SafeToTrust' component={SafeToTrustPolicy} />
      <Screen name='HealthAndSafety' component={HealthAndSafetyPolicy} />
    </Navigator>
  );
}
