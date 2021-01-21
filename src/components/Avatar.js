import React from "react";
import { StyleSheet, Image } from "react-native";

const Avatar = ({ sm, rounded }) => {
  let styleSM = {};

  styleSM = sm && { width: 80, height: 80, borderRadius: rounded && 30 };

  return (
    <Image
      source={require("../assets/images/dp.jpg")}
      style={[styles.imgStyle, styleSM]}
    />
  );
};
const styles = StyleSheet.create({
  imgStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
export default Avatar;
