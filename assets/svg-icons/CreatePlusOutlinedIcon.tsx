import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SvgIconProps {
  color: string;
  size: number;
}

const CreatePlusOutlinedIcon = (props: SvgIconProps) => (
  <Svg viewBox="0 0 28 28" width={props.size} height={props.size} fill="none">
    <Path
      d="M7 13.8a.8.8 0 0 1 .8-.8H13V7.8a.797.797 0 0 1 .8-.8h.4a.8.8 0 0 1 .8.8V13h5.2a.798.798 0 0 1 .8.8v.4a.8.8 0 0 1-.8.8H15v5.2a.8.8 0 0 1-.8.8h-.4a.8.8 0 0 1-.8-.8V15H7.8a.8.8 0 0 1-.8-.8v-.4Z"
      fill={props.color}
    />
    <Path
      clipRule="evenodd"
      d="M1 14C1 6.82 6.82 1 14 1s13 5.82 13 13-5.82 13-13 13S1 21.18 1 14ZM14 3C7.926 3 3 7.925 3 14s4.926 11 11 11 11-4.925 11-11S20.074 3 14 3Z"
      fill={props.color}
      fillRule="evenodd"
    />
  </Svg>
);

export default CreatePlusOutlinedIcon;
