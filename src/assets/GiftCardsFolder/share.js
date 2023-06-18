import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={66}
    height={66}
    fill="none"
    {...props}
  >
    <Circle cx={33} cy={33.177} r={32.609} fill="#fff" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.58}
      d="M22.677 33.177v10.321a2.58 2.58 0 0 0 2.58 2.58H40.74a2.58 2.58 0 0 0 2.58-2.58V33.177M38.16 25.436l-5.161-5.161-5.161 5.16M32.999 20.275v16.772"
    />
  </Svg>
)
export default SvgComponent
