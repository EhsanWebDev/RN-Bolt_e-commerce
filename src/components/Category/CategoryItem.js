import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { colors, layout, sizes } from "../../../constants/theme";
import Container from "../Container";
import GeneralText from "../GeneralText";

const CategoryItem = ({
  img = require("../../../assets/category/images/women/women1.png"),
  title = "Women",
  colorsArray = [colors.color1, colors.color2],
}) => {
  return (
    <Container
      styles={{ elevation: 8, height: 70, borderRadius: 8 }}
      mh={sizes.p_sm}
    >
      <ImageBackground
        source={img}
        style={{
          resizeMode: "cover",
          width: layout.width / 3,
          height: "100%",
          borderRadius: 8,
          backgroundColor: colors.white,
          overflow: "hidden",
          opacity: 0.75,
        }}
      >
        <LinearGradient
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          colors={colorsArray}
          style={{
            overflow: "hidden",
          }}
        >
          <GeneralText
            color={colors.white}
            bold
            center
            styles={{
              height: "100%",
              textAlignVertical: "center",
            }}
          >
            {title}
          </GeneralText>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
};

export default CategoryItem;
