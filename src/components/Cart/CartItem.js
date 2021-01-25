import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { images } from "../../../constants/images";
import { colors, sizes } from "../../../constants/theme";
import Container from "../Container";
import GeneralText from "../GeneralText";

// import { Container } from './styles';

const CartItem = () => {
  return (
    <Container
      mh={sizes.m_sm * 3}
      mv={sizes.m_sm * 1.1}
      p={sizes.p_sm}
      direction="row"
      bg={colors.white}
      styles={{
        elevation: 8,
      }}
    >
      <Image
        source={images.women2}
        style={{ width: 120, height: "100%", resizeMode: "contain" }}
      />

      <Container ml={sizes.m_sm * 3}>
        <GeneralText size={16}>Women T-Shirt</GeneralText>
        <GeneralText size={16} color={colors.gray}>
          Lotto.LTD
        </GeneralText>
        <GeneralText size={16} color={colors.secondary}>
          Rs.900
        </GeneralText>
        <Container direction="row" align="center" mt={sizes.m_sm}>
          <TouchableOpacity style={styles.cart_btn}>
            <GeneralText bold size={16}>
              -
            </GeneralText>
          </TouchableOpacity>

          <GeneralText bold size={16} styles={styles.cart_btn}>
            2
          </GeneralText>

          <TouchableOpacity style={styles.cart_btn}>
            <GeneralText bold size={16}>
              +
            </GeneralText>
          </TouchableOpacity>
        </Container>
      </Container>
      <TouchableOpacity style={{ position: "absolute", top: 10, right: 10 }}>
        <Image source={images.cancel} />
      </TouchableOpacity>
    </Container>
  );
};
const styles = StyleSheet.create({
  cart_btn: {
    padding: 12,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    elevation: 1,
  },
  cart_text: {},
});

export default CartItem;
