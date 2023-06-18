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
    <Rect width={40.635} height={40.635} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.523}
      d="m18.612 20.99-3.3 3.518L12 20.99"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={2.523}
      d="M15.315 24.226V15"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.523}
      d="M22.397 18.518 25.71 15l3.3 3.518"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={2.523}
      d="M25.56 15.418v9.225"
    />
  </Svg>
)
export default SvgComponent
