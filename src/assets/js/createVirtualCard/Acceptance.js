import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={15.745} cy={16.192} r={15.496} fill="#CFF1FF" />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.745 24.526a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM7.412 16.192h16.666"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.745 7.86a12.75 12.75 0 0 1 3.333 8.332 12.75 12.75 0 0 1-3.333 8.334 12.75 12.75 0 0 1-3.333-8.334 12.75 12.75 0 0 1 3.333-8.333v0Z"
    />
  </Svg>
)
export default SvgComponent
