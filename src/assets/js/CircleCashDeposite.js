import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={42}
    fill="none"
    {...props}
  >
    <Rect width={40.635} height={40.635} y={0.499} fill="#CFF1FF" rx={10} />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m17.507 23.307 1.39 1.39a2.006 2.006 0 0 0 2.84 0l.4-.4c.55-.55.55-1.43 0-1.98l-.41-.41c-.37-.36-.88-.57-1.41-.57-.53 0-1.03-.21-1.41-.58l-.4-.43c-.55-.55-.55-1.44 0-1.99l.43-.44c.36-.36.85-.56 1.36-.56.51 0 1 .2 1.36.56l1.47 1.47M20.317 15.317v12"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22.177 12.507c-4.86-1.02-9.63 2.09-10.65 6.94-1.02 4.85 2.08 9.63 6.94 10.65 4.86 1.02 9.63-2.08 10.65-6.94.32-1.49.24-3.04-.2-4.5"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m27.785 12.499 1.85 2-1.85 2"
    />
    <Path
      stroke="#3F37C9"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M29.495 14.499h-4.86"
    />
  </Svg>
)
export default SvgComponent
