import { useEffect, useState } from "react";
// import listMenuApi from "../../api/listMenuApi";
import {
  Pressable,
  Button,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Badge,
  Center,
  NativeBaseProvider,
  Actionsheet,
  useDisclose,
  Divider,
  Image,
} from "native-base";
import moment from "moment";
import { countTime } from "../../utils/date";
import Menu from "../../model/menu";

let listMenuDefaults = [];

const Home = ({ navigation }) => {
  const [listMenu, setListMenu] = useState(Menu);
  const [isFood, setIsFood] = useState("");
  const { isOpen, onOpen, onClose } = useDisclose();
  // const fetchlistMenu = async () => {
  //   const currentDate = new Date();
  //   const data = await listMenuApi.getAllListMenus();
  //   if (data && data.status) {
  //     const listMenu = data.result.data;
  //     listMenuDefaults = listMenu;
  //     const newListMenu = listMenuDefaults.filter((el) => {
  //       if (el.end_at && new Date(el.end_at) < currentDate) {
  //         return true;
  //       }
  //       return true;
  //     });
  //     setListMenu(newListMenu);
  //   }
  // };
  // useEffect(() => {
  //   fetchlistMenu();
  // }, []);
  return (
    <Box>
      <Box>
        <Text bold fontSize="lg" pl="4">
          Thực đơn hôm nay
        </Text>
        {listMenu.length ? (
          listMenu.map((item, i) => (
            <Pressable
              onPress={() => navigation.navigate("Oder", { menu: item })}
              key={i}
              alignItems="center"
              rounded="8"
              bg="warning.100"
              borderWidth="1"
              borderColor="coolGray.300"
              maxW="96"
              // shadow="3"
              p="5"
              mb={4}
              ml={2}
              mr={2}
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.800"
                  mt="3"
                  fontWeight="medium"
                  fontSize="xl"
                >
                  {item.menu_name}
                </Text>
                <Spacer />
                <Text mt="3" fontSize="sm" color="green.700">
                  Tạo bởi: {item.createBy.username}
                </Text>
                <Spacer />
              </HStack>
              <Text mt="2" fontSize="sm" color="red.500">
                Kết thúc sau: {countTime(item.end_at)}
              </Text>
            </Pressable>
          ))
        ) : (
          <Box>Chưa có thực đơn nào được tạo cho hôm nay</Box>
        )}
      </Box>
      ;
    </Box>
  );
};

export default Home;
