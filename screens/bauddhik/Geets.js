import React from "react";
import { View,  AsyncStorage, FlatList, Share } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import styles from "../../assets/styles/styles";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

export default class Geets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
  }

  // async componentDidMount() {
  //   const response = await fetch("", {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' +
  //     }
  //   });
  // }

  togglePlay() {
    this.setState({playing: !this.state.playing});
  }

  onStateChange = (state) => {
    if (state === "ended") {
      this.setState({playing: false});
    }
  }

  async onShare() {
    var string = this.state.data.khel.map(item => item.name + " (" + item.category + ")\r\n")
    .reduce((acc, cur, index, data) => acc + (index+1) + ": " + cur, this.state.data.name+":\r\n");
    try {
      const result = await Share.share({
        message: string
      });
    } catch(err) {
      alert(err)
    }
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Text
          category="h2"
        >
          Geets
        </Text>
        <View style={styles.spacer}/>
        <YoutubePlayer
          height={300}
          width={300}
          play={this.state.playing}
          videoId={"dN4LSA6Lal0"}
          onChangeState={this.onStateChange}
        />
      </View>
    );
  }

}
