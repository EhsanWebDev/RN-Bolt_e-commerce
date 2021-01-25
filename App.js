import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Splash from "./src/screens/Loading/Splash";
import Container from "./src/components/Container";
import GeneralText from "./src/components/GeneralText";
import Welcome from "./src/screens/Auth/Welcome";
import Login from "./src/screens/Auth/Login";
import { colors } from "./constants/theme";
import SignUp from "./src/screens/Auth/Signup";
import Home from "./src/screens/Home/Home";
import CategoryScreen from "./src/screens/Category/CategoryScreen";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";
import Cart from "./src/screens/Cart/Cart";

export default function App() {
  const [loaded, setLoaded] = useState(null);
  const loadFonts = async () => {
    await Font.loadAsync({
      Segoe: require("./assets/fonts/Poppins-Regular.ttf"),
      SegoeBold: require("./assets/fonts/Poppins-Bold.ttf"),
    })
      .then(() => {
        setLoaded(true);
      })
      .catch((e) => {
        setLoaded(false);
      });
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!loaded) {
    return null;
  }
  return (
    <Container flex={1} mt={30} bg={colors.white}>
      {/* <Splash /> */}
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
      {/* <CategoryScreen /> */}
      {/* <ProductDetails /> */}
      <Cart />
    </Container>
  );
}
