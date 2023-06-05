import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={15}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M44 13.837c-.721.02-1.444.014-2.161.069-.747.057-1.204-.178-1.255-.985-.047-.774-.463-1.08-1.24-1.005a8.63 8.63 0 0 1-1.672 0c-1.15-.114-2.094.032-2.33 1.416-.044.25-.209.519-.516.524-1.05.02-2.108.097-3.145-.011-.608-.063-.2-.568-.084-.838 1.006-2.316 2.037-4.625 3.06-6.934.584-1.32 1.199-2.628 1.745-3.966.427-1.05 1.16-1.536 2.277-1.515 3.254.066 2.53-.486 3.233 2.558.701 3.035 1.392 6.073 2.09 9.109C44 12.787 44 13.31 44 13.837Zm-5.175-8.93-.213.006c-.317.821-.648 1.639-.944 2.468-.183.512-.734 1.149-.415 1.523.378.441 1.17.13 1.782.152.483.017.639-.282.548-.71-.246-1.15-.506-2.295-.758-3.44ZM0 .748C2.228.691 4.45.278 6.649.862c.668.178.78.92.908 1.535.416 1.99.82 3.981 1.235 5.971.043.21.128.414.26.833.924-2.36 1.748-4.527 2.618-6.674.906-2.242.39-1.907 2.857-1.929 1.86-.017 1.87.002 1.15 1.683-1.522 3.558-3.073 7.104-4.568 10.673-.303.725-.715.96-1.482.956-2.834-.014-2.842.013-3.615-2.73C5.3 8.653 4.564 6.133 3.92 3.592c-.238-.942-.754-1.434-1.617-1.78C1.537 1.507.672 1.409 0 .749ZM25.185 14.085c-.912.035-1.907-.158-2.904-.368-.74-.158-1.105-.473-.867-1.293.181-.62-.01-1.475.469-1.85.498-.388 1.123.3 1.726.396 1.036.168 2.064.424 3.106.04.448-.166.867-.39.948-.902.087-.534-.29-.857-.69-1.094-.817-.482-1.698-.869-2.484-1.397-2.346-1.576-2.395-4.324-.08-5.963C26.648.068 29.134.11 31.672.782c.427.114.581.388.48.813-.015.063-.029.128-.039.193-.293 1.956-.293 1.956-2.179 1.592-.847-.163-1.7-.252-2.511.116-.84.38-.922 1.042-.158 1.562.62.422 1.324.718 1.978 1.094 1.393.8 2.541 1.753 2.42 3.599-.12 1.828-1.171 2.93-2.721 3.66-1.149.544-2.382.707-3.757.674ZM17.238 13.852c-1.897 0-1.882.002-1.555-1.885.576-3.323 1.135-6.65 1.693-9.976.258-1.54.25-1.542 1.782-1.546 2.236-.008 2.24-.006 1.872 2.184-.522 3.101-1.054 6.2-1.58 9.299-.37 2.192-.136 1.893-2.212 1.924Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .344h44V14.09H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent