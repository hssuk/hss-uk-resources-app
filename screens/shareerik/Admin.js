import React from "react";
//import { StyleSheet, View, Animated, FlatList, ScrollView, AsyncStorage, Share, Dimensions } from "react-native";
//import { Layout, Text } from "@ui-kitten/components";
//import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export default class Admin extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <WebView
        source = { {
          uri: 'https://drive.google.com/file/d/1OrjlmX_nSBX9cZmJmvQpI4lHDttObPL/view?usp=sharing'
        } }
      />
    );
  }
}

//const styles = StyleSheet.create( { } );
