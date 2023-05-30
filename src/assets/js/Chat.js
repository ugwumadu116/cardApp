import * as React from "react"
import Svg, { Ellipse, Path, Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <Ellipse cx={27} cy={26.591} fill="#3F37C9" rx={27} ry={26.5} />
    <Path
      fill="#fff"
      d="M39.125 32.466a2.584 2.584 0 0 1-2.583 2.583h-15.5l-5.167 5.167V19.549a2.583 2.583 0 0 1 2.583-2.583h18.084a2.583 2.583 0 0 1 2.583 2.583v12.917Z"
    />
    <Circle cx={20.837} cy={25.441} r={2.331} fill="#D9D9D9" />
    <Circle cx={27.5} cy={25.441} r={2.331} fill="#D9D9D9" />
    <Circle cx={34.162} cy={25.441} r={2.331} fill="#D9D9D9" />
  </Svg>
)
export default SvgComponent
