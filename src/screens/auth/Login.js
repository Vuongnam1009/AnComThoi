import * as React from "react";
import { StyleSheet, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  Icon,
  useTheme,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { validateEmail } from "../../utils/string";
import { StoreContext } from "../../store";
import authApi from "../../api/authApi";
import { login } from "../../store/actions/auth";

const Login = ({ navigation }) => {
  const { state, dispatch } = React.useContext(StoreContext);
  const { colors } = useTheme();
  const [show, setShow] = React.useState(false);
  const [formData, setData] = React.useState({ email: "", password: "" });
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const validateLogin = () => {
    let countError = 0;
    if (formData.email.length === 0) {
      setEmailError("Vui lòng nhập email");
      countError++;
    } else if (!validateEmail(formData.email)) {
      setEmailError("Địa chỉ email không hợp lệ");
      countError++;
    }
    if (formData.password.length === 0) {
      setPasswordError("Vui lòng nhập mật khẩu");
      countError++;
    }
    if (countError > 0) return false;
    return true;
  };

  const onSubmit = async () => {
    const { email, password } = formData;
    if (validateLogin()) {
      const data = await authApi.login(email, password);
      if (data && data.status) {
        login(data.result).then((response) => {
          dispatch(response);
        });
      } else {
        return;
      }
    } else {
      console.log("Validation Failed");
    }
  };
  return (
    <Box style={{ backgroundColor: "#009387", height: "100%" }}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Box style={styles.header}>
        <Heading
          size="xl"
          bold
          color="warmGray.700"
          _dark={{
            color: "warmGray.50",
          }}
        >
          ĂN CƠM THÔI
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Đăng nhập để tiếp tục!
        </Heading>
      </Box>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "#fff",
          },
        ]}
      >
        <Center w="100%">
          <Box safeArea p="2" py="1" w="90%" maxW="290">
            <VStack space={1} mt="3">
              <FormControl isInvalid={!!emailError}>
                <FormControl.Label>Địa chỉ email</FormControl.Label>
                <Input
                  size="md"
                  onChangeText={(value) => {
                    setEmailError("");
                    setData({ ...formData, email: value });
                  }}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={7}
                      ml="2"
                      color="muted.400"
                    />
                  }
                />
                {!!emailError ? (
                  <FormControl.ErrorMessage>
                    {emailError}
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={!!passwordError}>
                <FormControl.Label>Mật khẩu</FormControl.Label>
                <Input
                  size="2xl"
                  onChangeText={(value) => {
                    setPasswordError("");
                    setData({ ...formData, password: value });
                  }}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={7}
                      mr="2"
                      color="muted.400"
                      onPress={() => setShow(!show)}
                    />
                  }
                />
                {!!passwordError ? (
                  <FormControl.ErrorMessage>
                    {passwordError}
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
                <Link
                  _text={{
                    fontSize: "sm",
                    fontWeight: "500",
                    color: "indigo.500",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Bạn quên mật khẩu?
                </Link>
              </FormControl>
              <Button
                style={styles.signIn}
                mt="2"
                onPress={onSubmit}
                colorScheme="indigo"
              >
                <Text fontSize="md" bold color="#fff">
                  Đăng nhập
                </Text>
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  Chưa có tài khoản?{" "}
                </Text>
                <Link
                  _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                  href="#"
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Đăng ký ngay
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Animatable.View>
    </Box>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  signIn: {
    width: "100%",
    backgroundColor: "#009387",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
});
