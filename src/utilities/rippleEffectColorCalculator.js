import Color from "color";
export default function calculateRippleColor(buttonColor,mode) {
  
  if (mode=='dark')
  {return Color({
    r: Color(buttonColor).array[0],
    g: Color(buttonColor).array[1],
    b: Color(buttonColor).array[2],
    alpha: 0.5,
  }).toString();}
  else{
   
    return Color(buttonColor).lighten(0.5).string()
  }
}
