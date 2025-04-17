import Color from "color";
export default function calculateRippleColor(buttonColor) {
  return Color({
    r: Color(buttonColor).array[0],
    g: Color(buttonColor).array[1],
    b: Color(buttonColor).array[2],
    alpha: 0.5,
  }).toString();
}
