import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#F8F8FA" />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.814}
      d="m29.737 25.444-5.361-4.925L19 25.444"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={2.814}
      d="M24 20.913V31M30.665 17.241H18"
    />
  </Svg>
)
export default SvgComponent
