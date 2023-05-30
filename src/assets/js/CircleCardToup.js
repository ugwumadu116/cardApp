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
    <Rect width={40.635} height={40.635} y={0.621} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeWidth={1.5}
      d="M14.317 13.939h12c1.79 0 3.25 1.46 3.25 3.25v8c0 1.79-1.46 3.25-3.25 3.25h-12c-1.79 0-3.25-1.46-3.25-3.25v-8c0-1.79 1.46-3.25 3.25-3.25Z"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.067 18.969h17"
    />
    <Path
      stroke="#3F37C9"
      strokeDasharray="3 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M26.067 23.56h-5.75"
    />
  </Svg>
)
export default SvgComponent
