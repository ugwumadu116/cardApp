import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <Circle cx={26.767} cy={26.997} r={26.749} fill="#fff" />
    <G clipPath="url(#a)">
      <Path
        fill="#006E53"
        fillRule="evenodd"
        d="M20.303 41.56c.478 0 .828.102 1.049.305.22.202.33.517.331.945v2.292h-.718v-2.195c0-.483-.27-.725-.813-.725a1.235 1.235 0 0 0-.662.186c.034.145.05.293.048.442v2.292h-.718v-2.195c0-.483-.27-.725-.813-.725a2.08 2.08 0 0 0-.724.131v2.789h-.717V41.92a3.15 3.15 0 0 1 .748-.261c.277-.065.56-.098.844-.1.447 0 .78.087.997.26.359-.17.75-.259 1.148-.258Zm3.838 3.647c-.547 0-.958-.156-1.233-.47-.275-.312-.413-.768-.413-1.366 0-1.21.547-1.816 1.64-1.816.552 0 .966.156 1.244.466.278.31.417.76.417 1.35 0 .589-.143 1.042-.43 1.36-.287.317-.695.476-1.225.476Zm-.007-.614c.63 0 .944-.408.943-1.222 0-.405-.075-.708-.224-.908-.149-.2-.388-.3-.717-.3-.332 0-.57.102-.714.307-.143.205-.215.505-.215.9 0 .397.074.699.222.909.148.21.383.313.705.312v.002Zm4.058-3.03c.51 0 .897.153 1.16.462.265.308.397.745.398 1.31 0 .681-.158 1.163-.475 1.446-.316.283-.718.425-1.207.426-.979 0-1.469-.262-1.469-.787V40.25h.711v1.527c.143-.068.293-.12.448-.155.142-.037.287-.057.434-.06v.001Zm-.178 3.016c.373 0 .634-.108.783-.325.149-.216.224-.513.224-.89 0-.387-.08-.681-.236-.884-.157-.202-.39-.304-.7-.303-.135 0-.27.018-.4.051a1.4 1.4 0 0 0-.373.15v1.864c-.001.224.233.336.702.335v.002Zm2.547-4.15h.765v.657h-.765v-.656Zm.02 1.23h.718l.006 3.444h-.724V41.66Zm1.734 3.444v-4.778h.711v4.777l-.71.002Zm3.115-3.55c.533 0 .924.174 1.172.522.248.347.37.834.365 1.46h-2.406c.023.34.123.6.298.776.176.178.425.266.748.266.387 0 .768-.097 1.107-.283v.676a2.983 2.983 0 0 1-1.22.237c-.515 0-.92-.158-1.214-.473-.293-.315-.44-.762-.44-1.342 0-.594.139-1.048.417-1.363.277-.316.668-.474 1.173-.477Zm-.02.596c-.242 0-.431.065-.568.194-.136.129-.225.347-.266.655h1.66c-.032-.294-.114-.51-.246-.645s-.326-.203-.58-.204Zm-6.853-28.4c-.792-.196-1.4-.294-1.828-.294-3.184 0-5.766 2.573-5.766 5.746 0 3.174 2.583 5.747 5.766 5.747 3.184 0 5.767-2.573 5.767-5.747 0-.463-.056-.925-.166-1.375l4.584-1.235a10.408 10.408 0 0 1-1.367 8.362l-7.591 14.075h-7.033l4.997-9.212c.028-.05-.053-.162-.12-.168-5.34-.485-9.523-4.96-9.523-10.409 0-5.772 4.696-10.452 10.488-10.452a10.51 10.51 0 0 1 3.127.473l-1.335 4.489Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M16.277 8.788h20.98v36.42h-20.98z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
