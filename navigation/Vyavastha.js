import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { List, Card, Text, Layout, TabBar, Tab, Menu, MenuItem, MenuGroup } from '@ui-kitten/components';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default class Vyavastha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  setSelectedIndex(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Layout>
        <Menu
          selectedIndex={this.state.selectedIndex}
          onSelect={index => this.setSelectedIndex(index)}>
          <MenuGroup title='Relevant Policies'>
            <MenuItem title='Code of Conduct'>
            </MenuItem>
            <MenuItem title='Health and Safety'>
            </MenuItem>
            <MenuItem title='Registration Process'>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Layout>
    );
  }
}
