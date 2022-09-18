import { useState } from "react";
import {
  Button,
  Text,
  Box,
  Flex,
  Center,
  HStack,
  Spacer,
  Image,
  IconButton,
  useDisclose,
  Actionsheet,
  Divider,
} from "native-base";
import ActionAddOder from "./ActionAddOder";

function HomeScreen({ navigation, route }) {
  const listDish = [
    {
      id: 1,
      name: "Cơm trắng",
      price: 10000,
      img: "https://tse1.mm.bing.net/th?id=OIP.tVHSqTNjcP6CoKvOzIQimQHaE8&pid=Api&P=0",
    },
    {
      id: 1,
      name: "Thịt",
      price: 15000,
      img: "https://tse2.mm.bing.net/th?id=OIP.P_HOXXEdVU5GjfU9-vkuDwHaEK&pid=Api&P=0",
    },
  ];
  const [dishSelect, setDishSelect] = useState("");
  const [amount, setAmount] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={() => navigation.navigate("Menu")}>Go to Menu</Button>
      <Text>{route.params.menu.menu_name}</Text>

      <Flex alignItems="center">
        {listDish.map((dish, i) => (
          <HStack mb={4} alignItems="center">
            <Image
              borderRadius={10}
              size="64px"
              alt={dish.name}
              source={{
                uri: dish.img,
              }}
            />
            <Box pl="2">
              <Text>{dish.name}</Text>
              <Text>{`Giá: ${dish.price} đồng`}</Text>
            </Box>
            <Spacer />

            <Button
              ml={8}
              onPress={() => {
                setDishSelect(dish.id);
                onOpen();
                setAmount(1);
              }}
            >
              Thêm
              <ActionAddOder
                isOpen={isOpen}
                onClose={onClose}
                dish={dish}
                amount={amount}
                setAmount={setAmount}
                dishSelect={dishSelect}
              />
            </Button>
          </HStack>
        ))}
      </Flex>
    </>
  );
}
export default HomeScreen;
