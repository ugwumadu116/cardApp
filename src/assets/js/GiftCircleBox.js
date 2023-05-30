import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={31} height={31} x={0.716} y={0.789} fill="#FFDFAB" rx={15.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.883 16.289v8.333H9.55v-8.333M24.55 12.122H7.883v4.167H24.55v-4.167ZM16.216 24.622v-12.5M16.216 12.122h-3.75a2.083 2.083 0 1 1 0-4.167c2.917 0 3.75 4.167 3.75 4.167ZM16.216 12.122h3.75a2.083 2.083 0 1 0 0-4.167c-2.916 0-3.75 4.167-3.75 4.167Z"
    />
  </Svg>
)
export default SvgComponent
