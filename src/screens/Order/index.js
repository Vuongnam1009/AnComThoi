import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </>
  );
}
export default HomeScreen;
