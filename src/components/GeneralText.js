import React from "react";
import { Text } from "react-native";

const GeneralText = ({
  children,
  size,
  bold,
  color,
  styles,
  center,
  p,
  m,
  mh,
  ph,
  mv,
  pv,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => {
  return (
    <Text
      style={[
        {
          color: color ? color : "#000",
          fontSize: size ? size : 16,
          fontWeight: bold && "bold",
          fontFamily: bold ? "SegoeBold" : "Segoe",
          textAlign: center && "center",
          //Margins and paddings
          padding: p & p,
          margin: m & m,
          marginHorizontal: mh && mh,
          paddingHorizontal: ph && ph,
          marginVertical: mv && mv,
          paddingVertical: pv && pv,

          marginTop: mt && mt,
          marginRight: mr && mr,
          marginBottom: mb && mb,
          marginLeft: ml && ml,

          paddingTop: pt && pt,
          paddingRight: pr && pr,
          paddingBottom: pb && pb,
          paddingLeft: pl && pl,
        },
        styles,
      ]}
    >
      {children}
    </Text>
  );
};

export default GeneralText;
