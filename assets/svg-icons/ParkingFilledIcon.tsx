import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SvgIconProps {
  color: string;
  size: number;
}

const ParkingFilledIcon = (props: SvgIconProps) => (
  <Svg viewBox="0 0 454 454" width={props.size} height={props.size}>
    <Path d="M228.062 154.507h-34.938v65.631h34.938c18.094 0 32.814-14.72 32.814-32.814.001-18.094-14.72-32.817-32.814-32.817z" fill={props.color}/>
    <Path d="M0 0v454h454V0H0zm228.062 279.648h-34.938v79.398h-59.512V94.952l94.451.043c50.908 0 92.325 41.418 92.325 92.328 0 50.909-41.417 92.325-92.326 92.325z" fill={props.color}/>
  </Svg>
);

export default ParkingFilledIcon;
