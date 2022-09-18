import { useEffect, useState } from "react";
import Modal from "./Modal/index";
// import listOrderApi from "../../api/listOrderApi";
import {
  Button,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Badge,
  Center,
  NativeBaseProvider,
  Divider,
  Image,
} from "native-base";
// import moment from "moment";
import { countTime } from "../../utils/date";
import Menu from "../../model/menu";

// let listOrderDefaults = [];

const CreatMenu = () => {
  const [listOrder, setListOrder] = useState(Menu);
  //   const fetchlistMenu = async () => {
  //     const currentDate = new Date();
  //     const data = await listOrderApi.getAllListOrders();
  //     if (data && data.status) {
  //       const listOrder = data.result.data;
  //       listOrderDefaults = listOrder;
  //       const newListOrder = listOrderDefaults.filter((el) => {
  //         if (el.end_at && new Date(el.end_at) < currentDate) {
  //           return true;
  //         }
  //         return true;
  //       });
  //       setListOrder(newListOrder);
  //     }
  //   };
  // useEffect(() => {
  //   fetchlistMenu();
  // }, []);
  return (
    <Box>
      <Box>
        <Text style={{ color: "" }} bold fontSize="lg" pl="4">
          Thực đơn hôm nay
        </Text>
        {listOrder.length ? (
          listOrder.map((item, i) => (
            <Box key={i} alignItems="center">
              <Box bg="coolGray.200" maxW="96" w="100%" pl="4" pr="4">
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
                    Order
                  </Text>
                  <Spacer />
                </HStack>
                <Text mt="2" fontSize="sm" color="red.500">
                  Kết thúc sau: {countTime(item.end_at)}
                </Text>
                <Divider />
                <HStack alignItems="center">
                  <Badge
                    colorScheme="darkBlue"
                    _text={{
                      color: "white",
                    }}
                    variant="solid"
                    rounded="4"
                    p="1"
                    m="2"
                    // onPress={() =>}
                  >
                    Thêm món
                  </Badge>
                </HStack>
              </Box>
            </Box>
          ))
        ) : (
          <Box>Chưa có thực đơn nào được tạo cho hôm nay</Box>
        )}
        <Modal />
      </Box>
      ;
    </Box>
  );
};

export default CreatMenu;
