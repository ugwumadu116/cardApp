import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={23} height={23} x={0.116} y={0.841} fill="#CFF1FF" rx={11.5} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.283 8.84-6.417 6.417-2.917-2.916"
    />
  </Svg>
)
export default SvgComponent
