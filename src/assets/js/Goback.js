import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.5 22.293-7-7 7-7M31.64 15.293H10.5"
    />
  </Svg>
)
export default SvgComponent
