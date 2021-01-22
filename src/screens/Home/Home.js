import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { images } from "../../../constants/images";
import { colors, sizes } from "../../../constants/theme";
import CategoryItem from "../../components/Category/CategoryItem";
import Container from "../../components/Container";
import Header from "../../components/Header";
import ProductItem from "../../components/Product/ProductItem";
import SearchBar from "../../components/SearchBar";
import SeeAllView from "../../components/SeeAllView";

const men = require("../../../assets/category/images/men/men1.png");
const kids = require("../../../assets/category/images/kids/kids.png");

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header />

        <SearchBar />
        <SeeAllView title="Categories" />
        <ScrollView
          style={{
            marginLeft: sizes.m_sm,
            marginBottom: sizes.m_sm * 2,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <CategoryItem />
          <CategoryItem
            colorsArray={[colors.color3, colors.color4]}
            title="Men"
            img={men}
          />
          <CategoryItem
            colorsArray={[colors.color5, colors.color6]}
            title="Kids"
            img={kids}
          />
        </ScrollView>
        {/* Featured */}
        <SeeAllView title="Featured" />
        <ScrollView
          style={{ marginLeft: sizes.m_sm, marginBottom: sizes.m_sm }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <ProductItem price="800" title="Woman T-Shirt" img={images.women2} />
          <ProductItem price="1200" title="Man T-Shirt" img={images.men2} />
          <ProductItem price="900" title="Woman T-Shirt" img={images.women3} />
        </ScrollView>

        {/* Best Sell */}
        <SeeAllView title="Best Sell" />
        <ScrollView
          style={{ marginLeft: sizes.m_sm }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <ProductItem price="1800" title="Woman T-Shirt" img={images.women4} />
          <ProductItem price="600" title="Man T-Shirt" img={images.men3} />
          <ProductItem price="900" title="Woman T-Shirt" img={images.women3} />
        </ScrollView>
      </ScrollView>
    );
  }
}
