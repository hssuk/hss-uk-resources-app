import React from "react";
import { StyleSheet } from "react-native";
import { MenuGroup, MenuItem, Menu, Layout, Text, Button } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";

export default class Vishays extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      selectedIndex: 0,
      modalOpen: false,
      title: "",
      playing: false,
      url: "",
      viewLoading: true
    }
  }

  setSelectedIndex( index ) {
    this.setState( { selectedIndex: index } );
  }

  onStateChange = ( state ) => {
    if (state === "ended" ) {
      this.setState( { playing: false } );
    }
  }

  hideLoad( ) {
    this.setState( { viewLoading: false } )
  }

  getDataObject( data ) {
    if ( this.state.title == "" ) {
      return (
        <Layout>
          <Text>There is no resource selected yet</Text>
        </Layout>
       );
    } else {
      var value = data.filter( ( item ) => item.title === this.state.title );
      return value[0]
    }
  }

  DocIcon = ( props ) => (
    <Icon { ...props }
      size= { 20 }
      name = "file-document" />
  )

  VideoIcon = ( props ) => (
    <Icon { ...props }
      size= { 20 }
      name = "youtube" />
  )

  render( ) {
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
        url: "https://drive.google.com/file/d/16cGXmAyDHZKhPmBcIp0zwDZLdukrueD7/view?usp=sharing"
      },
      {
        title: "Fitness (Tarun/Yuva)",
        type: "Doc",
        url: "https://drive.google.com/file/d/14kC9ACxUjAqpfS74ouH7hZaaqczRg8aK/view?usp=sharing"
      },
      {
        title: "Fitness (Kishor)",
        type: "Doc",
        url: "https://drive.google.com/file/d/1j94T4fsgjL4GgJ76B4CNdXeQFnYOURwK/view?usp=sharing"
      },
    ];

    return (
      <Layout>
        <Menu
          selectedIndex = { this.state.selectedIndex }
          onSelect = { index => this.setSelectedIndex( index ) }>

          <MenuGroup
            title = { () => <Text style = { {
              margin: 10,
              fontFamily: "material-community",
              fontSize: 20
            }}>Samata</Text> }>

            <MenuItem
              title = 'Samata (Video)'
              accessoryRight = { this.VideoIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Samata (Video)"
              } ) } />
          </MenuGroup>

          <MenuGroup
            title = { () => <Text style = { {
              margin: 10,
              fontSize: 20
            } }>Vyayamyog</Text> }>

            <MenuItem
              title = 'Vyayamyog (Video)'
              accessoryRight = { this.VideoIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Vyayamyog (Video)"
              } ) } />
          </MenuGroup>

          <MenuGroup
            title = { () => <Text style = { {
              margin: 10,
              fontSize: 20
            } }>Dumbbells</Text> }>

            <MenuItem
              title = 'Dumbbells (Video)'
              accessoryRight = { this.VideoIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Dumbbells (Video)"
              } ) } />
          </MenuGroup>

          <MenuGroup
            title = { () => <Text style = { {
              margin: 10,
              fontSize: 20
            } }>Ni-Yuddha</Text> }>

            <MenuItem
              title = 'Prathmik (Video)'
              accessoryRight = { this.VideoIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Prathmik (Video)"
              } ) } />

            <MenuItem
              title = 'Pravesh (Video)'
              accessoryRight = { this.VideoIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Pravesh (Video)"
              } ) } />

            <MenuItem
              title = 'Praveen (Video)'
              accessoryRight = { this.VideoIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Praveen (Video)"
              } ) } />
          </MenuGroup>

          <MenuGroup
            title = { () => <Text style = { {
              margin: 10,
              fontSize: 20
            } }>Fitness</Text> }>

            <MenuItem
              title = 'Warmup and Cooling Down'
              accessoryRight = { this.DocIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Warmup and Cooling Down"
              } ) } />

            <MenuItem
              title = 'Fitness (Tarun/Yuva)'
              accessoryRight = { this.DocIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Fitness (Tarun/Yuva)"
              } ) } />

            <MenuItem
              title = 'Fitness (Kishor)'
              accessoryRight = { this.DocIcon }
              onPress= { () => this.setState( {
                modalOpen: true,
                title: "Fitness (Kishor)"
              } ) } />
          </MenuGroup>
        </Menu>

        <Modal
          isVisible = { this.state.modalOpen }

          onBackButtonPress = { () => this.setState( {
            modalOpen: false, title: ""
          } ) }

          onModalHide = { () => this.setState( {
            modalOpen: false,
            title: ""
          } ) }

          coverScreen = { false } >

        { this.getDataObject( data ).type == "Doc" && (
          <Layout style = { {
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            borderRadius: 5
          } } >

          <WebView
            onLoad= { () => this.hideLoad() }
            style = { {
              flex: 1,
              borderRadius: 5
            } }
            source = { { uri: 'https://drive.google.com/file/d/1OrjlmX_nSBX9cZmJmvQpI4lHDttObPLm/view?usp=sharing' } } />

          <Layout
            style = { {
              padding: 10,
              alignItems: 'center'
            } } >

            <Button
              appearance = 'outline'
              onPress = { () => this.setState( {
                modalOpen: false,
                title: ""
              } ) } >
              Close
            </Button>
          </Layout>
        </Layout>
        ) }

        { this.getDataObject( data ).type == "Video" && (
          <Layout style = { {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
          } }>

            <YoutubePlayer
              height = { 280 }
              width = { '100%' }
              play = { this.state.playing }
              videoId = { this.getDataObject( data ).url }
              onChangeState = { this.onStateChange }
            />

            <Button
              appearance='outline'
              onPress= { () => this.setState( {
                modalOpen: false,
                title: ""
              } ) } >
              Close
            </Button>
          </Layout>
        ) }
        </Modal>
      </Layout>
     );
  }
}
