import React from "react";
import { StyleSheet, Animated, FlatList, ScrollView, AsyncStorage, Share, View } from "react-native";
import { MenuGroup, MenuItem, Menu, Layout, Text, Button } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";

export default class Vishays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      modalOpen: false,
      title: "",
      playing: false,
      url: "",
      viewLoading: true
    }
  }

  setSelectedIndex(index) {
    this.setState({selectedIndex: index});
  }

  onStateChange = (state) => {
    if (state === "ended") {
      this.setState({playing: false});
    }
  }

  hideLoad() {
    this.setState({viewLoading: false})
  }

  getDataObject(data) {
    if (this.state.title == "") {
      return (
        <Layout>
          <Text>There is no resource selected yet!!</Text>
        </Layout>
      );
    } else {
      var value = data.filter((item) => item.title === this.state.title);
      console.log(value[0]);
      return value[0]
    }
  }

  DocIcon = (props) => (
    <Icon {...props} size={20} name="file-document" />
  );

  VideoIcon = (props) => (
    <Icon {...props} size={20} name="youtube" />
  )

  render() {

    const data = [
      {
        title: "Samata (Video)",
        type: "Video",
        url: "dN4LSA6Lal0"
      },
      {
        title: "Vyayamyog (Video)",
        type: "Video",
        url: "0ysJaFcNIBE"
      },
      {
        title: "Dumbbells (Video)",
        type: "Video",
        url: "vRbstC3EczE"
      },
      {
        title: "Prathmik (Video)",
        type: "Video",
        url: "VyWq5Tz4NhY"
      },
      {
        title: "Pravesh (Video)",
        type: "Video",
        url: "RDW2UrlN6VM"
      },
      {
        title: "Praveen (Video)",
        type: "Video",
        url: "JMu0nQ2_IeI"
      },
      {
        title: "Warmups",
        type: "Doc",
        url: "https://drive.google.com/file/d/1uQC_VqDVEsQpqth3LGxxQ_8CKBW-oWg6/view?usp=sharing"
      },
      {
        title: "Fitness (Tarun/Yuva)",
        type: "Doc",
        url: "https://drive.google.com/file/d/1TD5s2FGWiJQN73ZkCqeTLOSei6IPnmMs/view?usp=sharing"
      },
      {
        title: "Fitness (Kishor)",
        type: "Doc",
        url: "https://drive.google.com/file/d/1Ku3AmZKP-9gk_1T5C0p5ydhTifIKSv7c/view"
      },
    ];

    return (
      <Layout>
        <Menu
          selectedIndex={this.state.selectedIndex}
          onSelect={index => this.setSelectedIndex(index)}
        >
        <MenuGroup title={() => <Text style={{margin: 10, fontFamily: "material-community", fontSize: 20}}>Samata</Text>}>
          <MenuItem title='Samata (Video)'  accessoryRight={this.VideoIcon} onPress={() => this.setState({modalOpen: true, title: "Samata (Video)" })} />
        </MenuGroup>
        <MenuGroup title={() => <Text style={{margin: 10, fontSize: 20}}>Vyayamyog</Text>}>
          <MenuItem title='Vyayamyog (Video)' accessoryRight={this.VideoIcon} onPress={() => this.setState({modalOpen: true, title: "Vyayamyog (Video)" })} />
        </MenuGroup>
        <MenuGroup title={() => <Text style={{margin: 10, fontSize: 20}}>Dumbbells</Text>}>
          <MenuItem title='Dumbbells (Video)' accessoryRight={this.VideoIcon} onPress={() => this.setState({modalOpen: true, title: "Dumbbells (Video)" })}/>
        </MenuGroup>
        <MenuGroup title={() => <Text style={{margin: 10, fontSize: 20}}>Niyuddha</Text>}>
          <MenuItem title='Prathmik (Video)' accessoryRight={this.VideoIcon} onPress={() => this.setState({modalOpen: true, title: "Prathmik (Video)" })}/>
          <MenuItem title='Pravesh (Video)' accessoryRight={this.VideoIcon} onPress={() => this.setState({modalOpen: true, title: "Pravesh (Video)" })}/>
          <MenuItem title='Praveen (Video)' accessoryRight={this.VideoIcon} onPress={() => this.setState({modalOpen: true, title: "Praveen (Video)" })}/>
        </MenuGroup>
        <MenuGroup title={() => <Text style={{margin: 10, fontSize: 20}}>Fitness</Text>}>
          <MenuItem title='Warmups' accessoryRight={this.DocIcon} onPress={() => this.setState({modalOpen: true, title: "Warmups" })}/>
          <MenuItem title='Fitness (Tarun/Yuva)' accessoryRight={this.DocIcon} onPress={() => this.setState({modalOpen: true, title: "Fitness (Tarun/Yuva)" })}/>
          <MenuItem title='Fitness (Kishor)' accessoryRight={this.DocIcon} onPress={() => this.setState({modalOpen: true, title: "Fitness (Kishor)" })}/>
        </MenuGroup>
        </Menu>
        <Modal
          isVisible={this.state.modalOpen}
          onBackButtonPress={() => this.setState({modalOpen: false, title: ""})}
          onModalHide={() => this.setState({modalOpen: false, title: ""})}
        >
        {this.getDataObject(data).type == "Doc" && (
        <Layout style={{flex: 1, padding: 10, justifyContent: 'center', borderRadius: 5}}>
          <WebView
            onLoad={() => this.hideLoad()}
            style={{flex: 1, borderRadius: 5}}
            source={{uri: 'https://drive.google.com/file/d/1epD4b1F_CpOxDb7GJvWzYHELnntPrt3v/view'}}
          />
          <Layout style={{ padding: 10, alignItems: 'center'}}>
            <Button appearance='outline' onPress={() => this.setState({modalOpen: false, title: ""})}>
              Close Modal
            </Button>
          </Layout>
        </Layout>
        )}
        {this.getDataObject(data).type == "Video" && (
          <Layout style={{ alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <YoutubePlayer
              height={200}
              width={260}
              play={this.state.playing}
              videoId={this.getDataObject(data).url}
              onChangeState={this.onStateChange}
            />
            <Button appearance='outline' onPress={() => this.setState({modalOpen: false, title: ""})}>
              Close Modal
            </Button>
          </Layout>
        )}
        </Modal>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: 500,
    height: 300
  }
})
