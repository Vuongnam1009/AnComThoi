import {
  Button,
  Text,
  Box,
  Flex,
  Center,
  HStack,
  Spacer,
  TextArea,
  Image,
  IconButton,
  useDisclose,
  Actionsheet,
  Divider,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

function ActionAddOder({
  isOpen,
  onClose,
  dish,
  amount,
  setAmount,
  dishSelect,
}) {
  return (
    <Actionsheet isOpen={isOpen && dish.id === dishSelect} onClose={onClose}>
      <Actionsheet.Content>
        <Box
          w="100%"
          // h={600}
          // px={4}
          justifyContent="center"
        >
          <Flex pb={2} direction="row" alignItems="end">
            <Image
              width="140px"
              height="140px"
              alt={dish.name}
              borderRadius={2}
              source={{
                uri: dish.img,
              }}
            />
            <Text fontSize={20} ml={4}>{`${dish.price} đồng`}</Text>
          </Flex>
          <Divider />
          <Flex direction="row" justifyContent="space-between">
            <Center>Số lượng</Center>
            <Flex direction="row" alignItems="center">
              <IconButton
                isDisabled={!(amount - 1)}
                onPress={() => {
                  if (amount > 1) {
                    setAmount(amount - 1);
                  }
                }}
                icon={<AntDesign name="minus" size={18} color="black" />}
                borderRadius="full"
              />
              <Center
                _text={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {amount}
              </Center>
              <IconButton
                onPress={() => setAmount(amount + 1)}
                icon={<AntDesign name="plus" size={18} color="black" />}
                borderRadius="full"
              />
            </Flex>
          </Flex>
          <Divider />
          <Text mt={2} mb={2}>
            Ghi chú
          </Text>
          <TextArea mb={4} h={20} />
          <Divider />

          <Button onPress={() => onClose()}>Thêm vào giỏ</Button>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
export default ActionAddOder;
