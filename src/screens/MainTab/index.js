import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../Home/Menu";
import CreatMenu from "../CreatMenu/index";
import Order from "../Order/index";
import BoxChat from "../BoxChat/index";
import { Box, Divider } from "native-base";

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = (props) => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#35a031",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      tabBarActiveBackgroundColor: "#effcde",
      tabBarActiveTintColor: "#35a031",
    }}
    initialRouteName="Trang chủ"
  >
    <Tab.Screen
      name="Trang chủ"
      component={HomeScreen}
      options={{
        tabBarLabel: "Trang chủ",
        // headerShown: false,
        headerRight: () => (
          <Box
            style={{
              marginRight: 12,
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FontAwesome
              name="user-circle"
              size={34}
              color="#fff"
              onPress={() => props.navigation.openDrawer()}
            />
          </Box>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-home" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Tạo Menu"
      component={CreatMenu}
      options={{
        tabBarLabel: "Tạo Menu",
        // headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="set-meal" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Hef"
      component={Order}
      options={{
        tabBarLabel: "Đặt cơm",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="restaurant-menu" size={28} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="dHe"
      component={BoxChat}
      options={{
        tabBarLabel: "Box Chat",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="chatbubbles-sharp" size={28} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;
