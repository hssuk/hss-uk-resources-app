import React from "react";
//import { View,  AsyncStorage, FlatList, Share } from "react-native";
import { View } from "react-native";
//import { Layout, Text, List, Card, Button, Spinner, Icon} from "@ui-kitten/components";
import { Layout, Text, List, Card, Button, Icon} from "@ui-kitten/components";
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Modal from 'react-native-modal';

import styles from "../../assets/styles/styles";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

const data = [
  {
    name: "Shoora Vayam",
    lyricsLink: require("../../assets/docs/Geet1.pdf"),
    audioLink: require("../../assets/audio/shoora-vayam.mp3"),
    type: "audio"
  },
  {
    name: "Apna Ghar Ho",
    lyricsLink: require("../../assets/docs/Geet2.pdf"),
    audioLink: require("../../assets/audio/apna-ghar-ho-bhakti-dham.mp3"),
    type: "audio"
  },
  {
    name: "Hindu Jage Vishwa Jage",
    lyricsLink: require("../../assets/docs/Geet3.pdf"),
    audioLink: require("../../assets/audio/hindu-jage-vishwa-jage.mp3"),
    type: "audio"
  }
];

const DocIcon = ( props ) => (
  <Icon { ...props }
    pack="eva"
    name="file-text-outline"/>
);

export default class Geets extends React.Component {
  constructor( props ) {
    super( props );
    this.playbackInstance = null;
    this.isSeeking = false;
    this.playAtEndOfSeek = false;
    this.state = {
      loadedGeet: "",
      isLoadingSound: false,
      isSoundLoaded: false,
      shouldPlay: false,
      isPlaying: false,
      rate: 1.0,
      volume: 1.0,
      shouldCorrectPitch: false,
      currentTrack: "",
      currentSoundPosition: false,
      soundLength: false,
      visible: false,
      lyricsVisible: false,
      lyricsSource: false,
      lyricsLoaded: false,
      type: false,
      videoUrl: false,
      videoPlaying: false
    }
  }

  componentDidMount() {
    Audio.setAudioModeAsync( {
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
     } );
  }

  async componentWillUnmount() {
    if ( this.playbackInstance != null ) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance = null;
    }
  }

  async stopAudio() {
    this.setState( {
      loadedGeet: "",
      isLoadingSound: false,
      isSoundLoaded: false,
      shouldPlay: false,
      isPlaying: false,
      rate: 1.0,
      volume: 1.0,
      shouldCorrectPitch: false,
      currentTrack: "",
      currentSoundPosition: false,
      soundLength: false,
      visible: false,
     } );

    if ( this.playbackInstance != null ) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance = null;
    }
  }

  async playPause( value ) {
    var item = data.find( x => x.name == value );
    if ( this.playbackInstance == null ) {
      this.playAudio(item, true );
    } else {
      if ( item.name != this.state.currentTrack ) {
        await this.playbackInstance.unloadAsync();
        this.playbackInstance = null;
        this.playAudio( item, true );
      } else {
        if ( this.state.isPlaying) {
          this.setState( { isPlaying: false } );
          await this.playbackInstance.pauseAsync();
        } else {
          this.setState( { isPlaying: true } );
          await this.playbackInstance.playAsync();
        }
      }
    }
  }

  async playAudio( item, playing ) {
    this.setState( {
      isLoadingSound: false,
      isSoundLoaded: false,
      currentTrack: item.name
    } )
    const source = item.audioLink;
    const initStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,
      volume: this.state.volume,
      isMuted: this.state.muted,
    }
    this.setState( { isLoadingSound: true } );
    const { sound, status } = await Audio.Sound.createAsync(
      source, initStatus,
      this.onPlaybackStatusUpdate
    );
    this.playbackInstance = sound;
    this.setState( {
      isLoadingSound: true,
      isSoundLoaded: true
    } );
  }

  onSliderValueChange = () => {
    if ( this.playbackInstance != null && !this.isSeeking ) {
      this.isSeeking = true;
      this.playAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  }

  onStateChange = ( state ) => {
    if ( state === "ended" ) {
      this.setState( { playing: false } );
    }
  }

  onSliderValueComplete = ( value ) => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.soundLength;
      if ( this.playAtEndOfSeek ) {
        this.playbackInstance.playFromPositionAsync( seekPosition );
      } else {
        this.playbackInstance.setPositionAsync( seekPosition );
      }
    }
  }

  getSliderPosition() {
    if ( this.playbackInstance != null && this.state.currentSoundPosition != null && this.state.soundLength != null ) {
      return ( this.state.currentSoundPosition/this.state.soundLength );
    }
    return 0;
  }

  onPlaybackStatusUpdate = status => {
    if ( status.isLoaded ) {
      this.setState( {
        currentSoundPosition: status.positionMillis,
        soundLength: status.durationMillis,
        rate: status.rate,
        volume: status.volume,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isLooping: false,
        muted: status.muted
      } );

      if ( status.didJustFinish && !status.isLooping ) {
        this.stopAudio();
      }
    } else {
      if (status.error) {
        console.log(`Error: ${ status.error }`);
      }
    }
  }

  render() {
    return (
      <Layout style= { {
        flex: 1,
        justifyContent: 'center',
        padding: 10 } }>
        <Text category = "h2">Geets</Text>
        <View style = { styles.spacer }/>

        <List
          data= { data }
          renderItem= { ( { item, index } ) => (
          <View>
            <Card
              status = 'primary'
              style = { { marginBottom: 10 } }
              header = { ( props ) => (
                <View { ...props }>
                  <Text category='h5'>{ item.name }</Text>
                  <Text category='s1'>Geet { index + 1 }</Text>
                </View>
              )}
              footer = { () => (
                  <View style = { {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 20
                  } } >
                    <Button
                      onPress= {  () => this.setState( {
                        visible: true,
                        loadedGeet: item.name,
                        type: item.type,
                        videoUrl: item.audioLink
                      } ) }>Play Geet</Button>
                  </View>
              )}>
              <Button
                accessoryLeft= { DocIcon}
                onPress= { () => { this.setState( {
                  lyricsVisible: true,
                  lyricsSource: item.lyricsLink
                } ) } }>View Lyrics</Button>
            </Card>
          </View>
          )}
        />

        <Modal
          isVisible = { this.state.visible}
          onBackdropPress= {  () => this.setState( { visible: false } ) }
          coverScreen= { false }
          onModalHide= { () => {
            this.setState( { loadedGeet: "" }, () => this.stopAudio() )
          }}
        >
          <Layout
            style= {  {
              alignItems: 'center',
              padding: 20,
              borderRadius: 5
            } } >
            <Text>{this.state.loadedGeet}</Text>
            { this.state.type == "audio" && (
              <View style= {  { flexDirection: 'row'} }>
                <Button
                  accessoryLeft = { ( props ) => (
                    <Icon
                      { ...props }
                      pack="material"
                      name = { this.state.isPlaying ? "pause" : "play" }
                    />
                  )}
                  onPress= {  () => this.playPause( this.state.loadedGeet ) }
                />
                <Slider
                  style = { {
                    width: 200,
                    height: 35,
                    marginLeft: 15
                  } }
                  minimumValue = { 0 }
                  disabled = { ( !this.state.currentSoundPosition && !this.state.soundLength ) }
                  value = { this.getSliderPosition() }
                  maximumValue = { 1 }
                  onValueChange = { this.onSliderValueChange }
                  onSlidingComplete = { this.onSliderValueComplete }
                  minimumTrackTintColor = "#000000"
                  maximumTrackTintColor = "#000000"
                />
              </View>
            ) }

            { this.state.type == "video" && (
              <YoutubePlayer
                height= { 200 }
                width= { '100%' }
                play = { this.state.videoPlaying }
                videoId = { this.state.videoUrl }
                onChangeState= { this.onStateChange }
              />
            ) }
          </Layout>
        </Modal>

        <Modal
          isVisible = { this.state.lyricsVisible }
          onBackdropPress= { () => this.setState( { lyricsVisible: false } ) }
        >
          <Layout style= { {
            justifyContent: 'center',
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10
          } } >
            <WebView
              style= { { flex: 1 } }
              source = { this.state.lyricsSource }
            />
          </Layout>
        </Modal>
      </Layout>
    );
  }

}
