import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Rect width={40.635} height={40.635} y={0.164} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.317 10.482 3.09 6.26 6.91 1.01-5 4.87 1.18 6.88-6.18-3.25-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01 3.09-6.26Z"
    />
  </Svg>
)
export default SvgComponent
