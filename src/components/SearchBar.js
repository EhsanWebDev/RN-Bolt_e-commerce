import React from "react";
import { TextInput, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Container from "./Container";
import { colors, sizes } from "../../constants/theme";

const SearchBar = () => {
  return (
    <Container
      direction="row"
      mv={sizes.m_sm * 2}
      mh={sizes.m_sm * 2}
      p={sizes.p_sm}
      styles={{
        borderColor: colors.dark2,
        borderWidth: 0.3,
        borderRadius: 20,
      }}
    >
      <FontAwesome
        name="search"
        size={24}
        color={colors.muted}
        style={{ paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Search your product"
        placeholderTextColor="#818181"
        style={{ flex: 1, fontSize: 18 }}
      />
    </Container>
  );
};

export default SearchBar;
