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
    <Rect width={40.635} height={40.635} y={0.892} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeWidth={1.5}
      d="M14.317 18.21h12c1.79 0 3.25 1.46 3.25 3.25v6c0 1.79-1.46 3.25-3.25 3.25h-12c-1.79 0-3.25-1.46-3.25-3.25v-6c0-1.79 1.46-3.25 3.25-3.25ZM20.317 15.178c0-1.66-1.34-3-3-3h-1c-1.66 0-3 1.34-3 3s1.34 3 3 3h2c1.1 0 2-.9 2-2v-1ZM20.317 15.178c0-1.66 1.34-3 3-3h1c1.66 0 3 1.34 3 3s-1.34 3-3 3h-2c-1.1 0-2-.9-2-2v-1ZM20.317 17.46v14"
    />
  </Svg>
)
export default SvgComponent
