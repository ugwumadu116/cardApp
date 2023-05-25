import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={153}
    height={6}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FFC300"
      strokeLinecap="round"
      strokeWidth={6}
      d="M31.535 3h59.103"
    />
    <Path
      stroke="#FFC300"
      strokeLinecap="round"
      strokeWidth={3}
      d="M1.983 3h24.86M95.947 3h24.86M125.807 3h24.86"
      opacity={0.3}
    />
  </Svg>
)
export default SvgComponent
