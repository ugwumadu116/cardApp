import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={89}
    height={7}
    fill="none"
    {...props}
  >
    <Path stroke="#FFC300" strokeWidth={6} d="M29.552 3.435h59.103" />
    <Path stroke="#FFC300" strokeWidth={3} d="M0 3.435h24.86" opacity={0.3} />
  </Svg>
)
export default SvgComponent
