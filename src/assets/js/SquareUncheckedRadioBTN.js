import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <Rect
      width={13.344}
      height={13.344}
      x={0.332}
      y={1.328}
      stroke="#D9D9D9"
      strokeWidth={0.664}
      rx={2.99}
    />
  </Svg>
)
export default SvgComponent
