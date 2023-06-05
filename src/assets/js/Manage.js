import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#F8F8FA" />
    <G clipPath="url(#a)">
      <Path
        fill="#3F37C9"
        d="M29.833 16.5h-5.441a.857.857 0 0 1-.375-.092l-2.634-1.316a2.476 2.476 0 0 0-1.116-.267h-2.109A4.179 4.179 0 0 0 14 19v10c0 2.3 1.867 4.167 4.167 4.167h11.666C32.133 33.167 34 31.3 34 29v-8.333c0-2.3-1.867-4.167-4.167-4.167Zm-11.666 0h2.108c.125 0 .258.033.375.092l2.633 1.316c.342.175.734.267 1.117.267h5.442c1.083 0 2.016.7 2.358 1.667H15.667v-.834c0-1.375 1.125-2.5 2.5-2.5V16.5Zm11.666 15H18.167a2.507 2.507 0 0 1-2.5-2.5v-7.5h16.666V29c0 1.375-1.125 2.5-2.5 2.5Zm-.833-5c0 .717-.3 1.392-.85 1.892l-1.292 1.216a.834.834 0 0 1-.575.225.859.859 0 0 1-.608-.258.83.83 0 0 1 .033-1.175l1.125-1.058h-7a.836.836 0 0 1-.833-.834c0-.458.375-.833.833-.833h7.017l-1.125-1.058a.83.83 0 1 1 1.142-1.209l1.3 1.217a2.53 2.53 0 0 1 .841 1.883L29 26.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M14 14h20v20H14z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent