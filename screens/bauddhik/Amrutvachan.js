import React from "react";
import { StyleSheet, View, Animated, FlatList, ScrollView, AsyncStorage, Share } from "react-native";
import { Layout } from "@ui-kitten/components";
import WebView from "react-native-webview";


export default class Amrutvachan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{flex: 1}}>
        <WebView
          source={{uri: }}
        />
      </Layout>
    );
  }
}
