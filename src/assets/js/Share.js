import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={52}
    fill="none"
    {...props}
  >
    <Circle cx={25.327} cy={26.154} r={25.274} fill="#FFC300" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.327 26.154v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M29.327 20.154l-4-4-4 4M25.327 16.154v13"
    />
  </Svg>
)
export default SvgComponent
