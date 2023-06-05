import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={43}
    fill="none"
    {...props}
  >
    <Rect width={40.635} height={41.722} y={0.657} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M27.317 20.518h-14a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2ZM15.317 20.518v-4a5 5 0 0 1 10 0v4"
    />
  </Svg>
)
export default SvgComponent
