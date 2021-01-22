import React from "react";
import { Image, View } from "react-native";
import { colors, sizes } from "../../constants/theme";
import Container from "./Container";

const MenuBar = require("../../assets/icons/MenuBar.png");
const filter = require("../../assets/icons/filter.png");
const Notofication = require("../../assets/icons/Notofication.png");
const Back = require("../../assets/icons/Back.png");
const Search = require("../../assets/icons/Search.png");

const Header = ({ showBack }) => {
  return (
    <Container
      ph={sizes.p_sm * 3}
      mt={sizes.m_sm}
      direction="row"
      justify="space-between"
      align="center"
    >
      {showBack ? (
        <Image source={Back} style={{ tintColor: colors.dark }} />
      ) : (
        <Image source={MenuBar} />
      )}

      <Container direction="row" justify="flex-end" align="center">
        <Image
          source={showBack ? Search : Notofication}
          style={{
            marginRight: 20,
            tintColor: colors.dark2,
          }}
        />
        <Image
          source={filter}
          style={{
            tintColor: colors.dark2,
          }}
        />
      </Container>
    </Container>
  );
};

export default Header;
