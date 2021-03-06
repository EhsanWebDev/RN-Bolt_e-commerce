import React, { Component } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../../constants/images";
import { colors, layout, sizes } from "../../../constants/theme";
import Button from "../../components/Button";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import SizeButton from "../../components/SizeButton";

export default class ProductDetails extends Component {
  state = {
    text:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
    showMore: true,
    limit: 120,
  };
  render() {
    const { text, limit, showMore } = this.state;
    return (
      <Container flex={1}>
        <ScrollView style={{ flex: 1 }}>
          <Header showBack />

          <Image
            source={images.womenPD}
            style={{
              alignSelf: "center",
              //   marginVertical: sizes.m_sm,
              width: layout.width * 0.9,
              height: layout.height / 3.5,
              resizeMode: "contain",
              borderRadius: 2,
            }}
          />
          <Container mh={sizes.m_sm * 2}>
            <GeneralText size={25}>Black turtleneck top</GeneralText>
            <GeneralText size={20} color={colors.secondary}>
              Rs 2400{"  "}
              <GeneralText
                size={13}
                color={colors.dark}
                styles={{ textDecorationLine: "line-through" }}
              >
                Rs 4800
              </GeneralText>
            </GeneralText>
          </Container>

          <Container
            styles={{
              borderTopColor: colors.muted,
              borderTopWidth: 1,
              borderBottomColor: colors.muted,
              borderBottomWidth: 1,
            }}
            direction="row"
            align="center"
            justify="center"
            ph={sizes.m_sm * 2}
            pv={sizes.p_sm}
            mv={sizes.m_sm}
          >
            <Container flex={1} direction="row" align="center">
              <GeneralText
                styles={{
                  backgroundColor: colors.secondary,
                  borderRadius: 8,
                }}
                center
                color={colors.white}
                size={18}
                mr={sizes.m_sm * 3}
                ph={12}
                pv={8}
              >
                4.5
              </GeneralText>
              <GeneralText size={18}>Very Good</GeneralText>
            </Container>
            <GeneralText color={colors.secondary} bold>
              49 Reviews
            </GeneralText>
          </Container>

          <Container flex={1} ph={sizes.p_sm * 2} mv={sizes.p_sm}>
            <GeneralText>Description</GeneralText>
            <GeneralText size={14} color={colors.gray} styles={{ flex: 1 }}>
              {text.substr(0, limit)}{" "}
              {showMore && (
                <TouchableOpacity
                  style={{ paddingTop: 4, height: 22 }}
                  onPress={() =>
                    this.setState({ limit: text.length, showMore: false })
                  }
                >
                  <GeneralText size={16} bold color={colors.secondary}>
                    Show More
                  </GeneralText>
                </TouchableOpacity>
              )}
            </GeneralText>
          </Container>
          <Container
            styles={{
              borderTopColor: colors.muted,
              borderTopWidth: 1,
              borderBottomColor: colors.muted,
              borderBottomWidth: 1,
            }}
            ph={sizes.m_sm * 2}
            pv={sizes.p_sm}
            mv={sizes.m_sm}
            direction="row"
            justify="space-evenly"
          >
            <GeneralText bold size={18} color={colors.dark}>
              Select Size
            </GeneralText>
            <GeneralText size={18} color={colors.p}>
              Select Color
            </GeneralText>
          </Container>
          <Container
            direction="row"
            justify="space-evenly"
            align="center"
            ph={sizes.p_sm * 4}
            mv={sizes.m_sm * 3}
          >
            <SizeButton title="S" />
            <SizeButton title="M" contained />
            <SizeButton title="XL" />
            <SizeButton title="XXL" noBg />
          </Container>
        </ScrollView>
        <Container direction="row">
          <Button
            label="Add to cart"
            Colors={[colors.cart_btn, colors.cart_btn]}
            width={layout.width / 2}
            text_color={colors.dark}
            br={0}
          />
          <Button
            label="BUY NOW"
            Colors={[colors.secondary, colors.secondary]}
            width={layout.width / 2}
            br={0}
          />
        </Container>
      </Container>
    );
  }
}
