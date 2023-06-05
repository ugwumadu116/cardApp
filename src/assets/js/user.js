import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M15.5 3a5.943 5.943 0 0 0-5.938 5.938c0 3.212 2.513 5.812 5.788 5.925.1-.013.2-.013.275 0h.087a5.923 5.923 0 0 0 5.726-5.925A5.943 5.943 0 0 0 15.5 3ZM21.851 18.186c-3.487-2.325-9.175-2.325-12.687 0-1.588 1.063-2.463 2.5-2.463 4.038 0 1.537.875 2.962 2.45 4.012 1.75 1.175 4.05 1.763 6.35 1.763s4.6-.588 6.35-1.763c1.575-1.062 2.45-2.487 2.45-4.037-.012-1.538-.875-2.963-2.45-4.013Z"
    />
  </Svg>
)
export default SvgComponent
