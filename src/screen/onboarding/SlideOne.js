import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={155}
    height={6}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FFC300"
      strokeLinecap="round"
      strokeWidth={6}
      d="M3.983 3h59.103"
    />
    <Path
      stroke="#FFC300"
      strokeLinecap="round"
      strokeWidth={3}
      d="M68.086 3h24.86M97.947 3h24.86M127.807 3h24.86"
      opacity={0.3}
    />
  </Svg>
)
export default SvgComponent
