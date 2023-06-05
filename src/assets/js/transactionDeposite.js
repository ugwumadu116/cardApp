import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Rect width={30} height={30} x={0.343} y={0.77} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={2}
      d="M22.843 17.847a7.5 7.5 0 0 0-15 0"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.01 16.763 3.333-3.083 3.334 3.083"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15.343 13.922v8.091"
    />
  </Svg>
)
export default SvgComponent
