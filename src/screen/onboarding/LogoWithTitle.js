import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={142}
    height={34}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M27.37 18.984c.232 0 .468.016.705.05 1.717.253 3.094 1.637 3.346 3.37a4.016 4.016 0 0 1-.71 2.95c-.232.321-.57.628-1 .91l-.031.02c-.015.012-.043.027-.074.05a11.999 11.999 0 0 1-6.389 1.845c-3.054 0-5.939-1.131-8.125-3.186a12.411 12.411 0 0 1-.504-.504 7.944 7.944 0 0 0 9.037-2.857 7.15 7.15 0 0 0 .484-.806c.07-.125.136-.253.21-.377.55-.903 1.717-1.465 3.05-1.465Zm-16.926-1.64c.186 6.657 5.834 11.995 12.777 11.995 2.19 0 4.25-.54 6.048-1.473.349-.175.69-.372 1.016-.582a.173.173 0 0 1 .042-.03l.02-.013c.5-.325.961-.72 1.31-1.205a5.165 5.165 0 0 0 .915-3.8c-.326-2.22-2.109-4.023-4.33-4.349a5.992 5.992 0 0 0-.873-.062c-1.674 0-3.248.71-4.043 2.027-.22.369-.395.76-.64 1.101a6.748 6.748 0 0 1-5.489 2.811c-3.617 0-6.571-2.845-6.753-6.42Z"
      />
      <Path
        fill="#fff"
        d="M31.692 25.974A16.94 16.94 0 0 1 17.4 33.801C8.059 33.801.5 26.241.5 16.906S8.06 0 17.395 0c5.873 0 11.052 3.004 14.08 7.552a5.088 5.088 0 0 0-1.14-.996c-.004 0-.004-.004-.004-.004-.015-.012-.03-.02-.042-.031-.33-.206-.667-.404-1.02-.586a13.095 13.095 0 0 0-6.048-1.477c-6.947 0-12.603 5.342-12.789 12.002.004-.062.004-.127.016-.19-.012.098-.012.198-.016.291-.011.113-.011.23-.011.345 0 .117 0 .23.011.341.186 6.61 5.796 11.914 12.689 11.914 3.283-.004 6.315-1.214 8.571-3.187Z"
      />
      <Path
        fill="#FFB81D"
        d="M32.541 10.8c.09 2.745-1.872 5.067-4.61 5.319-1.853.17-3.768-.512-4.66-1.993-.22-.364-.395-.756-.639-1.097a6.72 6.72 0 0 0-5.47-2.803 6.746 6.746 0 0 0-6.734 6.397c.186-6.637 5.815-11.96 12.735-11.96 2.183 0 4.234.539 6.029 1.47.345.174.686.372 1.011.58.012.013.027.02.043.032l.016.012c.546.352 1.038.794 1.399 1.333.531.783.849 1.714.88 2.71Z"
      />
      <Path
        fill="#fff"
        d="M57.135 11.068c-.299.391-.679.585-1.144.585-.318 0-.632-.085-.95-.252a6.9 6.9 0 0 0-2.957-.643c-1.303 0-2.439.275-3.404.822a5.573 5.573 0 0 0-2.233 2.318c-.52.996-.783 2.136-.783 3.419 0 2.194.589 3.861 1.771 4.997 1.183 1.136 2.73 1.702 4.648 1.702 1.136 0 2.121-.213 2.958-.643.334-.148.632-.225.892-.225.485 0 .892.205 1.229.612.28.353.419.737.419 1.144a1.467 1.467 0 0 1-.868 1.368 10.228 10.228 0 0 1-4.633 1.09c-1.826 0-3.501-.388-5.025-1.16-1.527-.771-2.744-1.91-3.655-3.419-.911-1.508-1.369-3.33-1.369-5.47 0-1.9.434-3.601 1.299-5.11a9.235 9.235 0 0 1 3.586-3.531C48.443 7.827 50.164 7.4 52.08 7.4c1.841 0 3.531.45 5.074 1.346.54.814.531 1.585-.02 2.322ZM73.518 12.35c.318.319.473.726.473 1.23v11.808c0 .485-.16.888-.473 1.214-.318.325-.717.488-1.202.488-.484 0-.88-.159-1.186-.473-.306-.318-.47-.717-.489-1.202-.67.776-1.674 1.388-3.016 1.838-1.837.302-3.454.012-4.853-.876-1.043-.66-1.865-1.578-2.47-2.749-.605-1.17-.907-2.504-.907-3.993 0-1.489.298-2.822.892-4.004.597-1.183 1.41-2.102 2.442-2.764a6.223 6.223 0 0 1 3.42-.993c.89 0 1.728.163 2.511.489.784.325 1.443.74 1.981 1.24v-.027c0-.485.16-.888.473-1.213.318-.326.718-.489 1.202-.489.485 0 .888.159 1.202.477ZM69.64 22.974c.764-.884 1.144-1.996 1.144-3.334 0-1.341-.38-2.458-1.144-3.35-.764-.891-1.748-1.34-2.958-1.34-1.19 0-2.167.445-2.93 1.34-.764.892-1.144 2.009-1.144 3.35 0 1.341.376 2.45 1.132 3.334.756.884 1.737 1.326 2.946 1.326 1.202 0 2.19-.442 2.954-1.326ZM86.792 12.63c.38.318.573.69.573 1.116 0 .578-.15 1.008-.445 1.299a1.483 1.483 0 0 1-1.063.434c-.279 0-.597-.066-.95-.194-.054-.02-.182-.054-.375-.112a2.175 2.175 0 0 0-.628-.085c-.485 0-.95.147-1.396.445-.446.299-.814.749-1.101 1.353-.29.605-.434 1.326-.434 2.164v6.617c0 .485-.16.888-.473 1.214-.318.325-.717.488-1.202.488s-.884-.163-1.202-.488c-.318-.326-.473-.73-.473-1.214v-11.53c0-.484.16-.887.473-1.213.318-.325.717-.488 1.202-.488s.884.163 1.202.488c.318.326.473.73.473 1.214v.364a4.218 4.218 0 0 1 1.841-1.744c.799-.4 1.656-.601 2.567-.601.562-.004 1.03.155 1.41.473ZM102.411 6.908c.318.318.473.725.473 1.229v17.251c0 .485-.159.888-.473 1.214-.318.325-.717.488-1.202.488-.484 0-.88-.159-1.186-.473-.306-.318-.47-.717-.488-1.201-.671.775-1.675 1.387-3.016 1.837-1.838.302-3.455.012-4.854-.876-1.043-.66-1.865-1.578-2.47-2.749-.604-1.17-.907-2.504-.907-3.993 0-1.488.299-2.822.892-4.004.597-1.183 1.411-2.101 2.442-2.764a6.223 6.223 0 0 1 3.42-.993c.891 0 1.728.163 2.512.489.783.325 1.442.74 1.98 1.24V8.137c0-.485.16-.888.474-1.213.317-.326.717-.489 1.201-.489.485-.004.884.155 1.202.473Zm-3.88 16.065c.763-.884 1.143-1.996 1.143-3.334 0-1.341-.38-2.458-1.144-3.35-.763-.89-1.748-1.34-2.957-1.34-1.19 0-2.167.445-2.931 1.34-.764.892-1.144 2.009-1.144 3.35 0 1.342.376 2.45 1.132 3.334.756.884 1.737 1.326 2.946 1.326 1.206 0 2.19-.442 2.955-1.326ZM106.625 10.312c-.26-.206-.391-.567-.391-1.09v-.531c0-.52.139-.884.418-1.09.279-.205.725-.306 1.342-.306.651 0 1.108.101 1.368.307.26.205.392.57.392 1.089v.531c0 .539-.136.907-.404 1.101-.267.194-.728.295-1.38.295-.635 0-1.081-.101-1.345-.306Zm2.57 16.569c-.318.325-.717.488-1.201.488-.485 0-.884-.163-1.202-.488-.318-.326-.473-.73-.473-1.214v-11.53c0-.484.159-.887.473-1.213.318-.325.717-.488 1.202-.488.484 0 .883.163 1.201.488.318.326.473.73.473 1.214v11.53c0 .48-.159.887-.473 1.213ZM124.768 10.312c.26-.206.392-.567.392-1.09v-.531c0-.52-.14-.884-.419-1.09-.279-.205-.725-.306-1.341-.306-.652 0-1.109.101-1.369.307-.26.205-.391.57-.391 1.089v.531c0 .539.135.907.403 1.101.271.194.729.295 1.38.295.636 0 1.085-.101 1.345-.306Zm-2.57 16.569c.318.325.717.488 1.202.488.484 0 .883-.163 1.201-.488.318-.326.473-.73.473-1.214v-11.53c0-.484-.159-.887-.473-1.213-.318-.325-.717-.488-1.201-.488-.485 0-.884.163-1.202.488-.318.326-.473.73-.473 1.214v11.53c0 .48.159.887.473 1.213ZM140.411 13.843c.725 1.124 1.089 2.683 1.089 4.675v7.145c0 .485-.159.888-.473 1.214-.318.325-.717.488-1.202.488-.484 0-.884-.163-1.202-.488-.317-.326-.472-.73-.472-1.214v-7.145c0-1.023-.214-1.83-.644-2.415-.43-.585-1.163-.88-2.206-.88-1.081 0-1.927.31-2.539.934-.617.625-.923 1.412-.923 2.358v7.144c0 .485-.159.888-.473 1.214-.318.325-.717.488-1.202.488-.484 0-.883-.163-1.201-.488-.318-.326-.473-.73-.473-1.214V14.138c0-.485.159-.888.473-1.214.318-.325.717-.488 1.201-.488.485 0 .884.163 1.202.488.318.326.473.73.473 1.214v.473c.504-.671 1.159-1.249 1.97-1.73a5.094 5.094 0 0 1 2.667-.724c1.895-.004 3.21.562 3.935 1.686ZM113.971 25.695V14.239h-1c-1.027 0-1.527-.527-1.527-1.353 0-.825.5-1.322 1.527-1.322h1V8.22c0-.97.59-1.675 1.497-1.675.938 0 1.527.733 1.527 1.675v3.35h1.353c.853 0 1.439.468 1.439 1.321 0 .88-.59 1.353-1.439 1.353h-1.353V25.7c0 .969-.589 1.674-1.527 1.674-.911-.003-1.497-.709-1.497-1.678Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h141v33.801H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
