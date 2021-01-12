import React from "react";
import { StyleSheet, View, Animated, FlatList, ScrollView, AsyncStorage, Share, Dimensions } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { WebView } from 'react-native-webview';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const source = {uri: 'https://drive.google.com/file/d/1epD4b1F_CpOxDb7GJvWzYHELnntPrt3v/view?usp=sharing', cache: true}
    return (
      <WebView
        source={{uri: 'https://drive.google.com/file/d/1epD4b1F_CpOxDb7GJvWzYHELnntPrt3v/view' }}
      />
    );
  }
}

const styles = StyleSheet.create({
});
