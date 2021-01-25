import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const colors = {
  primary: "#4263ec",
  secondary: "#667EEA",
  gray: "#707070",
  muted: "#A6A6A6",
  white: "#fff",
  dark: "#323232",
  dark2: "#404040",
  borderColor: "#DADADA",
  h1Color: "#434343",
  p: "#2A2A2A",
  light_gray: "#F3F3F3",

  cart_btn: "#E1E1E1",

  // Gradient
  color1: "#667EEA",
  color2: "#64B6FF",

  color3: "#FF5858",
  color4: "#FB5895",

  color5: "#43E97B",
  color6: "#38F9D7",
};

export const layout = {
  height,
  width,
};

export const sizes = {
  font_10: 10,
  font_14: 14,
  font_16: 16,
  font_18: 18,

  m_sm: 10,
  p_sm: 10,
};
