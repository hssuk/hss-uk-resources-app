import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { List, Card, Text, Layout } from '@ui-kitten/components';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Home extends React.Component {

  render() {

    const data = [
      {
        title: "Bauddhik",
        icon: "book-open-variant",
        route: "Bauddhik"
      },
      {
        title: "Shareerik",
        icon: "karate",
        route: "Shareerik"
      },
      {
        title: "Vyavastha",
        icon: "information-outline",
        route: "Vyavastha"
      }
    ];

    return (
        <List
          contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          data={data}
          scrollEnabled={false}
          renderItem={({item}) => (
            <Card
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1.0,
                margin: 8,
                height: Dimensions.get("window").height / 4
              }}
              onPress={() => this.props.navigation.navigate(item.route)}
            >
              <Icon
                name={item.icon}
                size={86}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{alignSelf: 'center', marginTop: 8}}
                category='s2'
              >
              {item.title}
              </Text>
            </Card>
          )}
        />
    );
  }
}
