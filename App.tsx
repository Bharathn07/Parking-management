import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { ParkingLotProvider } from "./store/context/ParkingLotProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <ParkingLotProvider>
        <Navigation />
      </ParkingLotProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
