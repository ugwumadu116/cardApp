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
    <Rect width={40.635} height={40.635} y={0.77} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeWidth={1.5}
      d="M17.347 12.087h5.93c3.47 0 6.28 2.81 6.28 6.28v5.93c0 3.47-2.81 6.28-6.28 6.28h-12.21v-12.21c0-3.47 2.81-6.28 6.28-6.28Z"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.927 22.007c-.18.21-.31.46-.36.73l-.24 1.66c-.1.42.17.84.59.93.11.03.23.03.35 0l1.65-.23c.27-.06.52-.18.72-.37l4.35-4.35c.75-.75.12-.63-.98-1.74-1.1-1.11-.98-1.72-1.73-.97l-4.35 4.34Z"
    />
  </Svg>
)
export default SvgComponent
