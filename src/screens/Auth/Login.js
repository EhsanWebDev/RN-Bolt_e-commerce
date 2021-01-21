import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { colors, layout, sizes } from "../../../constants/theme";
import Button from "../../components/Button";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Input from "../../components/Input";

export default class Login extends Component {
  render() {
    return (
      <Container flex={1} ph={sizes.p_sm * 3} mt={sizes.m_sm * 3}>
        <Image
          source={require("../../../assets/icons/Back.png")}
          style={{ tintColor: colors.gray }}
        />

        <GeneralText
          size={sizes.font_10 * 3}
          mt={sizes.m_sm * 2}
          color={colors.dark}
        >
          Login
        </GeneralText>
        <Image
          source={require("../../../assets/login/login.png")}
          style={{
            width: layout.width,
            resizeMode: "contain",
            alignSelf: "center",
            height: layout.height / 3.5,
          }}
        />
        <Container flex={2} justify="center">
          <Input label={"Email"} placeholder={"Enter email-address"} />
          <Input
            label={"Password"}
            placeholder={"Enter password"}
            secureTextEntry={true}
          />
        </Container>
        <Container flex={1}>
          <Button width="100%" />
          <GeneralText color={colors.muted} center mt={sizes.m_sm * 2}>
            Don't have an account ? <GeneralText>Sign up</GeneralText>{" "}
          </GeneralText>
        </Container>
      </Container>
    );
  }
}
