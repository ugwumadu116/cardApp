import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Circle cx={27.42} cy={27.57} r={27.149} fill="#3F37C9" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.644}
      d="M34.43 20.56 20.41 34.58M20.41 20.56l14.02 14.02"
    />
  </Svg>
)
export default SvgComponent
