import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from "@react-navigation/native";
import { default as theme } from './assets/styles/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { MaterialIconsPack } from './assets/styles/material-icons.js';

import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
  <>
    <IconRegistry icons={[EvaIconsPack, MaterialIconsPack ]} />
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
