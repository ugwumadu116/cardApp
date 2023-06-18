import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#3F37C9"
      strokeWidth={1.5}
      d="M4 .75h12c1.79 0 3.25 1.46 3.25 3.25v10c0 1.79-1.46 3.25-3.25 3.25H4C2.21 17.25.75 15.79.75 14V4C.75 2.21 2.21.75 4 .75Z"
    />
    <Path
      stroke="#3F37C9"
      strokeWidth={1.5}
      d="M4 6.75h12c1.79 0 3.25 1.46 3.25 3.25v4c0 1.79-1.46 3.25-3.25 3.25H4C2.21 17.25.75 15.79.75 14v-4C.75 8.21 2.21 6.75 4 6.75Z"
    />
    <Path
      stroke="#3F37C9"
      strokeDasharray="3 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.75 4H7"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.5 12h3"
    />
  </Svg>
)
export default SvgComponent
