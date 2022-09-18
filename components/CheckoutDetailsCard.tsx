import { StyleSheet, Text, View } from "react-native";
import React from "react";

type CheckoutDetailsCardProps = {
  carRegistration: string;
  parkingDuration: number;
  parkingCharge: number;
};

const CheckoutDetailsCard = ({
  carRegistration,
  parkingDuration,
  parkingCharge,
}: CheckoutDetailsCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.displayRow}>
        <Text style={styles.infoLabel}>Car Registrarion: </Text>
        <Text style={styles.infoText}>{carRegistration}</Text>
      </View>

      <View style={styles.horizontalRule} />

      <View style={styles.displayRow}>
        <Text style={styles.infoLabel}>Time Spent: </Text>
        <View style={styles.adjacentTextGroup}>
          <Text testID="deregister-time-spent" style={styles.infoText}>
            {parkingDuration}
          </Text>
          <Text style={styles.infoText}>
            {" "}
            {parkingDuration === 1 ? "hour" : "hours"}
          </Text>
        </View>
      </View>

      <View style={styles.horizontalRule} />

      <View style={styles.displayRow}>
        <Text style={styles.infoLabel}>Parking Charge: </Text>
        <View style={styles.adjacentTextGroup}>
          <Text style={styles.infoText}>$</Text>
          <Text testID="deregister-charge" style={styles.infoText}>
            {parkingCharge}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CheckoutDetailsCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#c6d4f4",
    marginVertical: 10,
  },
  horizontalRule: {
    borderBottomWidth: 1,
    borderBottomColor: "#c6d4f4",
  },
  displayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  adjacentTextGroup: {
    flexDirection: "row",
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  infoText: {
    fontSize: 16,
  },
});
