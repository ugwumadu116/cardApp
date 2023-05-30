import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={65}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.4 61.772v-8.005h-1.307l-1.957 5.892-1.931-5.892H9.871v8.005h.96v-6.48l2.124 6.48h.373l2.123-6.48v6.48h.949Zm3.704.144c1.56 0 2.364-1.416 2.364-3.048 0-1.633-.804-3.037-2.364-3.037-1.548 0-2.364 1.404-2.364 3.036 0 1.633.816 3.049 2.364 3.049Zm0-.768c-1.008 0-1.452-1.105-1.452-2.28 0-1.165.444-2.269 1.452-2.269 1.02 0 1.464 1.105 1.464 2.269 0 1.175-.444 2.28-1.464 2.28Zm4.506.623v-4.115c.24-.492.828-.948 1.356-.948.096 0 .192.011.288.023v-.876c-.708 0-1.272.433-1.644 1.045v-.925h-.852v5.797h.852Zm4.848.145c.78 0 1.44-.348 1.908-.924l-.456-.517c-.36.468-.876.72-1.38.72-1.044 0-1.644-.876-1.68-2.04h3.768v-.264c0-1.691-.756-3.06-2.292-3.06-1.476 0-2.364 1.356-2.364 3.036 0 1.777.948 3.049 2.496 3.049Zm1.308-3.408H27.85c.024-.84.432-1.957 1.452-1.957 1.068 0 1.452 1.08 1.464 1.956Z"
    />
    <Rect
      width={40.635}
      height={40.635}
      x={0.24}
      y={0.617}
      fill="#CFF1FF"
      rx={10}
    />
    <Path
      fill="#9A4AFF"
      d="M20.56 12.119c2.06 0 3.73 1.636 3.73 3.654s-1.67 3.653-3.73 3.653-3.73-1.635-3.73-3.653 1.67-3.654 3.73-3.654Z"
    />
    <Path
      fill="#FFC300"
      d="M15.038 22.939c2.06 0 3.73 1.635 3.73 3.653s-1.67 3.654-3.73 3.654-3.73-1.636-3.73-3.654 1.67-3.653 3.73-3.653Z"
    />
    <Path
      fill="#9A4AFF"
      d="M26.083 22.939c2.06 0 3.73 1.635 3.73 3.653s-1.67 3.654-3.73 3.654-3.73-1.636-3.73-3.654 1.67-3.653 3.73-3.653Z"
    />
  </Svg>
)
export default SvgComponent
