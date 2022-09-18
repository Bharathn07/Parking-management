import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { ParkingLotContext } from "../store/context/ParkingLotProvider";
import { get12HourTimeString, showAlertToast } from "../helpers";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type NewParkingInputProps = {
  closeInputDialog: () => void;
};

const NewParkingInput = ({ closeInputDialog }: NewParkingInputProps) => {
  const [parkingTime, setParkingTime] = useState(new Date());
  const [carRegistration, setCarRegistration] = useState("");
  const [showParkingTimePicker, setShowParkingTimePicker] = useState(false);
  const { parkingLotState, parkingLotDispatch } = useContext(ParkingLotContext);

  function handleAddNewParking() {
    if (carRegistration === "") {
      showAlertToast("Car Registration is invalid");
      return;
    }
    const newParkingDetails = { parkingTime, carRegistration };
    parkingLotDispatch({
      type: "add-new-parking",
      payload: { newParkingDetails },
    });
    closeInputDialog();
  }

  function handleParkingTimeInputChange(
    event: DateTimePickerEvent,
    selectedTime: Date | undefined
  ) {
    if (selectedTime !== undefined) {
      setParkingTime(selectedTime);
    }
    setShowParkingTimePicker(false);
  }

  return (
    <>
      <Text>Parking Time (tap to change) :</Text>
      <Pressable
        onPress={() => setShowParkingTimePicker(true)}
        style={styles.inputField}
      >
        <Text>⌚ {get12HourTimeString(parkingTime)}</Text>
      </Pressable>

      {showParkingTimePicker && (
        <DateTimePicker
          value={parkingTime}
          mode="time"
          is24Hour={false}
          onChange={handleParkingTimeInputChange}
        />
      )}

      <Text>Car Registration:</Text>
      <TextInput
        placeholder="Enter Car Registration"
        autoCapitalize="characters"
        value={carRegistration}
        onChangeText={(text) => setCarRegistration(text)}
        style={styles.inputField}
        testID="parking-drawing-registration-input"
      />

      <View style={styles.buttonGroupHorizontal}>
        <View style={styles.button1Wrapper}>
          <Button title="Cancel" onPress={closeInputDialog} color="#0551b4" />
        </View>
        <View style={styles.button2Wrapper}>
          <Button
            title="Submit"
            onPress={handleAddNewParking}
            testID="parking-drawing-add-carbutton"
            color="#0551b4"
          />
        </View>
      </View>
    </>
  );
};

export default NewParkingInput;

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 12,
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#c6d4f4",
  },
  buttonGroupHorizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button1Wrapper: {
    flex: 1,
  },
  button2Wrapper: {
    flex: 2,
    marginLeft: 10,
  },
});
