import React from "react";
import { Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/auth/SplashScreen";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Navigator>
);

export default RootStackScreen;
