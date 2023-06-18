import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={22} height={22} x={0.616} y={1.091} stroke="#BABABA" rx={11} />
  </Svg>
)
export default SvgComponent
