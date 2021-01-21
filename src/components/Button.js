import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colors, layout, sizes } from "../../constants/theme";
import Container from "./Container";
import GeneralText from "./GeneralText";

// import { Container } from './styles';

const Button = ({ width, label = "Log in" }) => {
  return (
    <Container>
      <LinearGradient
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        colors={[colors.color1, colors.color2]}
        style={{
          width: width ? width : layout.width * 0.75,
          elevation: 12,
          borderRadius: 8,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity style={{ padding: 14, elevation: 12 }}>
          <GeneralText bold color={colors.white} center size={sizes.font_18}>
            {label}
          </GeneralText>
        </TouchableOpacity>
      </LinearGradient>
    </Container>
  );
};

export default Button;
