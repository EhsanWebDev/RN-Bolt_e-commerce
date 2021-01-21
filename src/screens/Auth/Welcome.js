import React from "react";
import { Image, View } from "react-native";
import { sizes, colors } from "../../../constants/theme";
import Button from "../../components/Button";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";

const Welcome = () => {
  return (
    <Container flex={1} bg={colors.white} pv={40}>
      <Container flex={1}>
        <GeneralText center size={sizes.font_10 * 2} color={colors.gray}>
          Welcome to{" "}
          <GeneralText bold size={sizes.font_10 * 2 + 2} color={colors.gray}>
            Bolt !
          </GeneralText>{" "}
        </GeneralText>
        <GeneralText center color={colors.gray} size={sizes.font_18}>
          Explore us
        </GeneralText>
      </Container>
      <Container flex={1} justify="flex-start" align="center">
        <Image source={require("../../../assets/login/Image.png")} />
      </Container>
      <Container>
        <Button />
        <GeneralText center mt={sizes.m_sm + 5} bold>
          Sign up
        </GeneralText>
      </Container>
    </Container>
  );
};

export default Welcome;
