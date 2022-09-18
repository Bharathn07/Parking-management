import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ParkingLotContext } from "../store/context/ParkingLotProvider";
import { SpaceId } from "../types";
import ParkingSpace from "./ParkingSpace";

const ParkingDrawing = () => {
  const { parkingLotState, parkingLotDispatch } = useContext(ParkingLotContext);

  function renderItem({
    item: spaceId,
    index,
  }: {
    item: SpaceId;
    index: number;
  }) {
    const isOccupied = parkingLotState.allocation[spaceId] !== undefined;
    if (isOccupied) {
      return (
        <ParkingSpace
          spaceId={spaceId}
          carRegistration={parkingLotState.allocation[spaceId].carRegistration}
        />
      );
    } else return <ParkingSpace spaceId={spaceId} />;
  }

  return (
    <>
      <FlatList
        data={parkingLotState.allSpaceIds}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        renderItem={renderItem}
      />
    </>
  );
};

export default ParkingDrawing;

const styles = StyleSheet.create({});
