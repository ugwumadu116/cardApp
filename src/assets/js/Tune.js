import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      d="M6.076 5.252a1.944 1.944 0 1 1 0-3.888 1.944 1.944 0 0 1 0 3.888Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      d="M9.575 3.308h7.804M1.205 3.308h1.37"
    />
    <Path
      stroke="#000"
      d="M6.076 15.252a1.944 1.944 0 1 1 0-3.888 1.944 1.944 0 0 1 0 3.888Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      d="M9.575 13.308h7.804M1.205 13.308h1.37"
    />
    <Path
      stroke="#000"
      d="M12.509 10.252a1.944 1.944 0 1 0 0-3.888 1.944 1.944 0 0 0 0 3.888Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      d="M9.009 8.308H1.205M17.38 8.308h-1.371"
    />
  </Svg>
)
export default SvgComponent
