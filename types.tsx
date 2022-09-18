export type SpaceId = number

export type AllocationData = {
  spaceId: SpaceId;
    parkingTime: Date;
    carRegistration: string;
}

export type ParkingLotState = {
  allSpaceIds: SpaceId[];
  availableSpaces: SpaceId[];
  allocation: {
    [key: SpaceId]: AllocationData
  };
}