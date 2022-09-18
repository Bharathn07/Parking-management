import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SpaceId } from "../types";

export type RootStackParamList = {
  CreateParkingLot: undefined;
  ManageParkingLot: undefined;
  CarDeregister: { spaceId: SpaceId };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
