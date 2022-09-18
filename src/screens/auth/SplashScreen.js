import React from "react";
import { Text, Dimensions, StyleSheet } from "react-native";
import { Box, Button } from "native-base";
import * as Animatable from "react-native-animatable";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    backgroundColor: "#009387",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

const SplashScreen = ({ navigation }) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </Box>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: "#fff",
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text style={styles.title}>Đặt cơm cùng mọi người!</Text>
        <Text style={styles.text}>Đăng nhập bằng tài khoản của bạn</Text>
        <Box style={styles.button}>
          <Button
            style={styles.signIn}
            onPress={() => navigation.navigate("Login")}
          >
            Bắt đầu ngay
          </Button>
        </Box>
      </Animatable.View>
    </Box>
  );
};

export default SplashScreen;
