import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={154}
    height={6}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FFC300"
      strokeLinecap="round"
      strokeWidth={6}
      d="M63.362 3h59.104"
    />
    <Path
      stroke="#FFC300"
      strokeLinecap="round"
      strokeWidth={3}
      d="M1.983 3h24.86M31.843 3h24.86M127.466 3h24.86"
      opacity={0.3}
    />
  </Svg>
)
export default SvgComponent
