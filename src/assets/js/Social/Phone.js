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
    <Rect width={40.635} height={40.635} y={0.622} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30.318 25.86v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.126.96.361 1.902.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03Z"
    />
  </Svg>
)
export default SvgComponent
