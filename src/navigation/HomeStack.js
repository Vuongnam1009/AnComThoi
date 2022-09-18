import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../screens/Home/Menu";
import Oder from "../screens/Home/Oder";

const RootStack = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Menu" component={Menu} />
    <RootStack.Screen name="Oder" component={Oder} />
  </RootStack.Navigator>
);

export default HomeStack;
