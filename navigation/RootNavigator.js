import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Vyavastha from "../navigation/Vyavastha.js";
import Shareerik from "../navigation/Shareerik.js";
import Bauddhik from "../navigation/Bauddhik.js";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function ListStackNavigator() {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Bauddhik"
        component={Bauddhik}
        options={{
          headerStyle: {
            backgroundColor: "#FF6721"
          },
          headerTintColor: 'white',
        }}
       />
      <Stack.Screen
        name="Shareerik"
        component={Shareerik}
        options={{
          headerStyle: {
            backgroundColor: "#FF6721"
          },
          headerTintColor: 'white',
        }}/>
      <Stack.Screen
        name="Vyavastha"
        component={Vyavastha}
        options={{
          headerStyle: {
            backgroundColor: "#FF6721"
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  )
}
