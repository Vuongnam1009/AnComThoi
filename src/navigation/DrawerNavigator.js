import { Box } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent/index";
import MainBottomTab from "./MainBottomTab";

const Drawer = createDrawerNavigator();
function PrivateScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: "100%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={<MainBottomTab />}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default PrivateScreen;
