import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={42}
    fill="none"
    {...props}
  >
    <Rect width={40.635} height={40.635} y={0.377} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.317 10.695h-3a5 5 0 0 0-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 0 1 1-1h3v-4Z"
    />
  </Svg>
)
export default SvgComponent
