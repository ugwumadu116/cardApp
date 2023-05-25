import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <Rect width={17} height={17} y={0.5} fill="#FFC300" rx={3} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.167 6.25-5.042 5.042L4.833 9"
    />
  </Svg>
)
export default SvgComponent
