import React, { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { colors, sizes } from "../../../constants/theme";
import Container from "../../components/Container";
import Header from "../../components/Header";
import SeeAllView from "../../components/SeeAllView";
import { DATA } from "../../../constants/data";
import ProductItem from "../../components/Product/ProductItem";
export default class CategoryScreen extends Component {
  renderHeader = () => (
    <Container flex={1}>
      <Header showBack />
      <SeeAllView title="Featured" withoutSeeAll titleSize={30} />
    </Container>
  );
  render() {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={ProductItem}
      />
    );
  }
}
