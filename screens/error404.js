import React from "react";
//import { StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export default class Error404 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Stay tuned for future updates!
        </Text>
      </Layout>
    );
  }
}
