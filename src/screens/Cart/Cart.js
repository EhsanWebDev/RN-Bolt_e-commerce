import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { layout, sizes } from "../../../constants/theme";
import Button from "../../components/Button";
import CartItem from "../../components/Cart/CartItem";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import SeeAllView from "../../components/SeeAllView";

export default class Cart extends Component {
  render() {
    return (
      <Container flex={1}>
        <Container>
          <Header showBack />
          <SeeAllView title="Cart" withoutSeeAll titleSize={30} />
        </Container>
        <ScrollView contentContainerStyle={{ marginTop: 10 }}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>
        <Container mv={sizes.m_sm * 1.5}>
          <Button label="Continue" width={layout.width / 1.1} br={0} />
        </Container>
      </Container>
    );
  }
}
