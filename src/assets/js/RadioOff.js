import * as React from "react"
import Svg, { Rect, Ellipse } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={57} height={32} fill="#F8F8FA" rx={16} />
    <Ellipse cx={13.525} cy={16} fill="#D9D9D9" rx={6.763} ry={6.588} />
  </Svg>
)
export default SvgComponent
