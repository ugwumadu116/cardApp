import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.716 21.41v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M12.716 11.41a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
)
export default SvgComponent
