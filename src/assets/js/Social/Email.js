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
    <Rect width={40.635} height={40.635} y={0.5} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.317 12.817h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2Z"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m30.317 14.817-10 7-10-7"
    />
  </Svg>
)
export default SvgComponent
