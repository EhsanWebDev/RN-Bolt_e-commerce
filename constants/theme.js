import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const colors = {
  primary: "#4263ec",
  gray: "#707070",
  muted: "#A6A6A6",
  white: "#fff",
  dark: "#323232",
  dark2: "#404040",
  borderColor: "#DADADA",

  // Gradient
  color1: "#667EEA",
  color2: "#64B6FF",
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
