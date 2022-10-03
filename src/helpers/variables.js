// FONTS
const italicFont = `'Raleway', sans-serif`;
const mainFont = "'Quicksand', sans-serif";
// SIZES
const xs = "10px";
const sm = "12px";
const md = "16px";
const lg = "24px";
const xl = "32px;";
const title = "48px";
const titleXl = "60px";
const titleXxl = "90px";
// COLORS
const lightGreen = "#CAD2C5";
const mediumGreen = "#84A98C";
const green = "#52796F";
const deepGreen = "#354F52";
const darkGreen = "#2F3E46";
const orange = "#fb8500";
const white = "#fff";

export function pxToRem(px) {
  return `${px / 16}rem`;
}

const vars = {
  italicFont,
  mainFont,
  xs,
  sm,
  md,
  lg,
  xl,
  title,
  titleXl,
  titleXxl,
  lightGreen,
  mediumGreen,
  green,
  deepGreen,
  darkGreen,
  orange,
  white,
};
export default vars;
