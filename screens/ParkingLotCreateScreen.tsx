import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useContext } from "react";
import { ParkingLotContext } from "../store/context/ParkingLotProvider";
import { RootStackScreenProps } from "../navigation/types";

const ParkingLotCreateScreen = ({
  navigation,
}: RootStackScreenProps<"CreateParkingLot">) => {
  const [parkingSpaceCountInput, setParkingSpaceCountInput] = useState("");
  const { parkingLotState, parkingLotDispatch } = useContext(ParkingLotContext);

  const handleInputChange = (enteredText: string) => {
    setParkingSpaceCountInput(enteredText);
  };

  const handleInputSubmit = () => {
    handleParkingLotCreation(parseInt(parkingSpaceCountInput, 10));
    setParkingSpaceCountInput("");
  };

  const handleParkingLotCreation = (parkingSpaceCount: number) => {
    parkingLotDispatch({
      type: "create-parking-lot",
      payload: { spaceCount: parkingSpaceCount },
    });
    navigation.reset({ index: 0, routes: [{ name: "ManageParkingLot" }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.guideText}>Parking Management</Text>
      <TextInput
        placeholder="Enter number of parking spaces"
        keyboardType="numeric"
        value={parkingSpaceCountInput}
        onChangeText={handleInputChange}
        onSubmitEditing={handleInputSubmit}
        style={styles.textInput}
        testID="parking-create-text-input"
      />
      <Button
        title="Submit"
        onPress={handleInputSubmit}
        disabled={parkingSpaceCountInput === ""}
        testID="parking-create-submit-button"
        color={"#0551b4"}
      />
    </View>
  );
};

export default ParkingLotCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  textInput: {
    backgroundColor: "#efefef",
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
  },
  guideText: {
    fontWeight: "500",
    fontSize: 32,
    alignSelf: "flex-start",
    marginTop: 32,
    marginBottom: 16,
  },
});
