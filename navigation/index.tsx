import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarDeregisterScreen from "../screens/CarDeregisterScreen";
import ParkingLotCreateScreen from "../screens/ParkingLotCreateScreen";
import ParkingLotDrawingScreen from "../screens/ParkingLotDrawingScreen";
import { RootStackParamList } from "./types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CreateParkingLot"
        component={ParkingLotCreateScreen}
        options={{
          title: "Create Parking",
        }}
      />
      <Stack.Screen
        name="ManageParkingLot"
        component={ParkingLotDrawingScreen}
        options={{
          title: "Manage Parking",
        }}
      />
      <Stack.Screen name="CarDeregister" component={CarDeregisterScreen} />
    </Stack.Navigator>
  );
}