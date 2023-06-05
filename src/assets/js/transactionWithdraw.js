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
    <Rect width={30} height={30} x={0.343} y={0.74} fill="#FFDFAB" rx={10} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M22.843 13.865a7.5 7.5 0 0 1-15 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.01 14.948 3.333 3.084 3.334-3.084"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15.343 17.79V9.698"
    />
  </Svg>
)
export default SvgComponent
