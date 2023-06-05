import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#3F37C9"
      fillRule="evenodd"
      d="M27.466.472v17.712a9.047 9.047 0 0 1-9.047 9.046H1.043a23.377 23.377 0 0 1-.31-3.807C.732 10.602 11.126.207 23.947.207c1.196 0 2.37.09 3.518.265Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.432 9.719-7.333 7.333-3.334-3.333"
    />
  </Svg>
)
export default SvgComponent
