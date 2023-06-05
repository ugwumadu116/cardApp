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
    <Rect width={40.635} height={40.635} y={0.647} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.817 30.437v-3c0-.55.45-1 1-1h15c.55 0 1 .45 1 1v3M10.817 30.437h19M14.597 14.317l5.84-3.31 5.84 3.31 3.66 2.04-1.02-.58c.63.35 1.03 1.02 1.03 1.75v1.44c0 .55-.45 1-1 1h-17c-.55 0-1-.45-1-1v-1.44c0-.73.39-1.39 1.03-1.75l2.62-1.46Z"
    />
    <Path
      stroke="#3F37C9"
      strokeWidth={1.5}
      d="M23.817 19.967v6.25M13.317 19.967v6.25M27.317 19.967v6.25M16.817 19.967v6.25M11.317 16.335h18"
    />
  </Svg>
)
export default SvgComponent
