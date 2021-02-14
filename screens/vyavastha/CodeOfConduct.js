import React from "react";
//import { StyleSheet, View, Animated, FlatList, ScrollView, AsyncStorage, Share } from "react-native";
import { View, ScrollView } from "react-native";
import { Layout, Text } from '@ui-kitten/components';
import WebView from 'react-native-webview';
//import Error404 from "../error404.js"

export default class CodeOfConduct extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <Layout style = { {
        flex: 1,
        justifyContent: 'center',
        padding: 10
      } } >
      <View style = { {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
      } } >
        <Text category="s2">HSS(UK) Code of Conduct</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          // alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>This is a practical guide for all those who participate in the activities of Hindu Swayamsevak
          Sangh (UK) [HSS (UK)].</Text>
        <Text category="s3">Background to the Guide</Text>
        <Text>We are part of a multicultural and diverse society. HSS (UK) promotes respect for all
          regardless of ethnic background, age, gender, health, disability, sexuality, family
          circumstances and religious/cultural beliefs.{`\n`}This is essential for a harmonious and cohesive
          society.
        </Text>
        <Text category="s3">Statement of Intent</Text>
        <Text>The HSS (UK) Code of Conduct is guided by the Sanskaars (values) enshrined in the Sangh
          Praarthanaa (Sangh prayer).{`\n`}
          All Swayamsevaks/Sevikas (members) and guests/speakers at HSS (UK) activities are
          reminded to adhere to and promote those values highlighted in the Sangh Praarthanaa,
          such as:{`\n`}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Good character worthy of respect by others:</Text><Text>“Sushilam Lokapujitham”</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Noble virtues of service to humanity:</Text><Text>“Tyaaga Sevaa Vratasyaayam”</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Promoting Universal Dharmic values:</Text><Text>“Vishwa Dharma Prakaashena”</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Promoting cohesive and harmonious living:</Text><Text>“Vishwa Shaanti Pravartake”</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Respect for the environment:</Text><Text>“Namaamo Bhumi Maataram”</Text>
        </View>

        <Text>Actions to Follow:{`\n`}</Text>
        <Text>We expect our Swayamsevaks/Sevikas to:{`\n`}</Text>

        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Adhere to and promote the spirit of the HSS (UK) Code of Conduct.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Make every effort to correct any deviation of the Code of Conduct at the earliest
              opportunity or report it to Adhikaris (office bearers) of HSS (UK) for further action.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Report any criminal activities or gross misconduct to the Karyawaha (Secretary)
              of HSS (UK).</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Inform our guests/speakers of the HSS (UK) Code of Conduct guidelines and request
              them to adhere to it.</Text>
        </View>
        <View>
          <Text>Approval Date: 15th September 2019</Text>
        </View>
      </ScrollView>
      </Layout>
    );
  }
}
