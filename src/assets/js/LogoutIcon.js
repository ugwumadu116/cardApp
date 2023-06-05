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
    <Rect width={40.635} height={40.635} y={0.042} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.817 27.86h-3.333a1.667 1.667 0 0 1-1.667-1.667V14.526a1.667 1.667 0 0 1 1.667-1.666h3.333M23.65 24.526l4.168-4.166-4.167-4.167M27.817 20.36h-10"
    />
  </Svg>
)
export default SvgComponent
