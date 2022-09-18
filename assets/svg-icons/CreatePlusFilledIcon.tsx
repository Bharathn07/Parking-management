import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SvgIconProps {
  color: string;
  size: number;
}

const CreatePlusFilledIcon = (props: SvgIconProps) => (
  <Svg viewBox="0 0 60 60" width={props.size} height={props.size} fill="none">
    <Path
      d="M1080 270a30 30 0 1 1 30-30 30 30 0 0 1-30 30Zm14-34h-10v-10a4 4 0 0 0-8 0v10h-10a4 4 0 0 0 0 8h10v10a4 4 0 0 0 8 0v-10h10a4 4 0 0 0 0-8Z"
      transform="translate(-1050 -210)"
      fill={props.color}
      fillRule="evenodd"
    />
  </Svg>
);

export default CreatePlusFilledIcon;
