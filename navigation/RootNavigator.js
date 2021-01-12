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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bauddhik" component={Bauddhik} />
      <Stack.Screen name="Shareerik" component={Shareerik} />
      <Stack.Screen name="Vyavastha" component={Vyavastha} />
    </Stack.Navigator>
  )
}
