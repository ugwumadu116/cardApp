import * as React from "react"
import Svg, { Mask, Ellipse, G, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={23}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={25}
      height={23}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Ellipse cx={12.236} cy={11.406} fill="#D9D9D9" rx={11.813} ry={11.078} />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#00D709" d="M.423 28.22V-5.407h8.393V28.22z" />
      <Path fill="#fff" d="M8.816 28.22V-5.407h8.393V28.22z" />
      <Path fill="#00D709" d="M17.208 28.22V-5.408h8.393V28.22z" />
    </G>
  </Svg>
)
export default SvgComponent
