import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/theme";
import GeneralText from "./GeneralText";

const SizeButton = ({ contained, title, noBg }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: contained
          ? colors.secondary
          : !noBg
          ? colors.light_gray
          : "transparent",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        elevation: !noBg ? 2 : 0,
      }}
    >
      <GeneralText color={contained && colors.white}>{title}</GeneralText>
    </TouchableOpacity>
  );
};

export default SizeButton;
