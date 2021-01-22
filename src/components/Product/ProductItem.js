import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Container from "../Container";
import GeneralText from "../GeneralText";
import { images } from "../../../constants/images";
import { colors, sizes } from "../../../constants/theme";

const ProductItem = ({ img = images.women2, price, title, item }) => {
  const { title: tit, img: image, price: pr } = item || {};
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginBottom: sizes.m_sm * 2,
        marginHorizontal: !image ? sizes.m_sm : 0,
      }}
    >
      <Image
        source={image ? image : img}
        resizeMode="contain"
        style={{ width: image ? "100%" : 150, height: 180, borderRadius: 4 }}
      />
      <Container align="center">
        <GeneralText ml={image ? sizes.m_sm * 3 : 2} mt={sizes.m_sm - 5}>
          Rs {pr ? pr : price}
        </GeneralText>
        <GeneralText ml={image ? sizes.m_sm * 3 : 2} color={colors.h1Color}>
          {tit ? tit : title}
        </GeneralText>
      </Container>
    </TouchableOpacity>
  );
};

export default ProductItem;
