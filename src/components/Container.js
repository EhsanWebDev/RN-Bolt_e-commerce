import React from "react";
import { View } from "react-native";

const Container = ({
  flex,
  direction,
  justify,
  align,
  children,
  bg,
  //   Margins and paddings
  m,
  p,
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
  styles,
}) => {
  return (
    <View
      style={[
        {
          flex: flex && flex,
          flexDirection: direction && direction,
          justifyContent: justify && justify,
          alignItems: justify && align,
          backgroundColor: bg && bg,
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
    </View>
  );
};

export default Container;
