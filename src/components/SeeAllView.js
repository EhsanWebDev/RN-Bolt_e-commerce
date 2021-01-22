import React from "react";
import { View } from "react-native";
import { colors, sizes } from "../../constants/theme";
import Container from "./Container";
import GeneralText from "./GeneralText";

// import { Container } from './styles';

const SeeAllView = ({ title = "Heading", withoutSeeAll, titleSize }) => {
  return (
    <Container
      //   flex={1}
      direction="row"
      justify="space-between"
      align="center"
      ph={sizes.p_sm * 2}
      mv={sizes.m_sm}
    >
      <GeneralText size={titleSize ? titleSize : 22} color={colors.h1Color}>
        {title}
      </GeneralText>
      {!withoutSeeAll && (
        <GeneralText color={colors.dark2}>See all</GeneralText>
      )}
    </Container>
  );
};

export default SeeAllView;
