import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={15.745} cy={16.208} r={15.496} fill="#CFF1FF" />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.578 7.874-8.333 10h7.5l-.833 6.667 8.333-10h-7.5l.833-6.667Z"
    />
  </Svg>
)
export default SvgComponent
