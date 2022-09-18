import { useEffect } from "react";
import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import authApi from "../api/authApi";

import { useContext } from "react";
import { StoreContext } from "../store";
function AppContainer() {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    setTimeout(async () => {
      let accessToken = null;
      let user = null;
      try {
        accessToken = await AsyncStorage.getItem("accessToken");
        if (accessToken) {
          const data = await authApi.verify(accessToken);
          if (data && data.status) {
            user = data.result.user;
          }
        }
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", payload: { accessToken, user } });
    }, 1000);
  }, []);

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {state.accessToken ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppContainer;
