import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Container, Text, Box, Divider, Button, Avatar } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { StoreContext } from "../../store";
function DrawerContent(props) {
  const { state, dispatch } = useContext(StoreContext);
  const user = state.user;
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <DrawerContentScrollView {...props}>
      <Box style={styles.drawerContent}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
          }}
        >
          <Button
            style={{ backgroundColor: "none" }}
            onPress={() => props.navigation.toggleDrawer()}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Button>
          <Text fontSize="xl" bold>
            Thông tin tài khoản
          </Text>
        </Box>
        <Box style={styles.userInfoSection}>
          <Avatar bg="cyan.500" source={{ uri: user.avatar }}>
            {`${user.name[0]}${user.name[1]}`}
          </Avatar>
          <Box style={{ marginLeft: 10 }}>
            <Text bold>{user.name}</Text>
            <Text>{user.email}</Text>
          </Box>
        </Box>
        <Divider my="2" />
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem label="Help" onPress={() => alert("Link to help")} />
        <DrawerItem label="Logout" onPress={logout} />
      </Box>
    </DrawerContentScrollView>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    display: "flex",
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
