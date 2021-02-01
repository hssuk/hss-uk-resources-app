import React from "react";
import { StyleSheet, View, Animated, FlatList, ScrollView, AsyncStorage, Share } from "react-native";
import { Layout, Text } from '@ui-kitten/components';
import WebView from 'react-native-webview';
import Error404 from "../error404.js"

export default class CodeOfConduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{flex: 1, justifyContent: 'center', padding: 10}}>
        <WebView
          style={{flex: 1, borderRadius: 10, borderColor: "black", borderWidth: 1}}
          source={require('../../assets/docs/HSS(UK)SafeToTrustPolicy.pdf')}
        />
        <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text category="s2">HSS (UK) Safe to Trust Policy</Text>
        </View>
      </Layout>
    );
  }
}
