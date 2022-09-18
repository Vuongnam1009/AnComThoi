import { useState } from "react";
import {
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Alert,
  Text,
  Box,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";

const FormAddListMenu = () => {
  const [open, setOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());
  const handlerTimeStart = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setTimeStart(currentDate);
  };
  const handlerTimeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setTimeEnd(currentDate);
  };
  return (
    <Box>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="450">
          <Modal.CloseButton />
          <Modal.Header>Tạo menu</Modal.Header>
          <Modal.Body>
            <Text>Tên menu</Text>
            <Input onChangeText={(value) => setMenuName(value)} />
            <Text>Thời gian bắt đầu</Text>
            <DateTimePicker
              value={timeStart}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={handlerTimeStart}
            />
            <Text>Thời gian kết thúc </Text>
            <DateTimePicker
              value={timeEnd}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={handlerTimeEnd}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}
              >
                Hủy
              </Button>
              <Button
                onPress={() => {
                  alert(menuName);
                  setOpen(false);
                }}
              >
                Tạo
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Stack space={2}>
        <Button onPress={() => setOpen(!open)}>Thêm mới</Button>
      </Stack>
    </Box>
  );
};

export default FormAddListMenu;
