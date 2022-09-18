import { Alert, Platform, ToastAndroid } from "react-native";

export const showAlertToast = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    200
  );

  if (Platform.OS !== "android") {
    Alert.alert("Uh Oh!", message);
  }
};

export function get12HourTimeString(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hoursString = hours % 12 === 0 ? "12" : (hours % 12).toString(); // the hour '0' should be '12'
  const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
  return `${hoursString}:${minutesString} ${ampm}`;
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getTimeDifferenceInHours(
  pastTime: Date,
  futureTime = new Date()
): number {
  const MILLISECONDS_IN_ONE_HOUR = 3600 * 1000;
  const timeDifferenceInMilliseconds =
    futureTime.getTime() - pastTime.getTime();

  if (timeDifferenceInMilliseconds <= 0) return 0;

  const timeDifferenceInHours = Number(
    (timeDifferenceInMilliseconds / MILLISECONDS_IN_ONE_HOUR).toFixed(1)
  );
  return timeDifferenceInHours;
}

export function getParkingChargeGivenTimeInHours(timeInHours: number): number {
  const MINIMUM_CHARGE_FIRST_TWO_HOURS = 10; //when time is <= 2hours charge is $10
  const HOURLY_CHARGE_AFTER_TWO_HOURS = 10; //for each hour more than 2, add $10 to charge

  const numberOfChargeableHours = Math.ceil(timeInHours);
  const numberOfHours_excludingFirstTwoHours =
    numberOfChargeableHours > 2 ? numberOfChargeableHours - 2 : 0;
  const parkingCharge =
    MINIMUM_CHARGE_FIRST_TWO_HOURS +
    numberOfHours_excludingFirstTwoHours * HOURLY_CHARGE_AFTER_TWO_HOURS;
  return parkingCharge;
}
