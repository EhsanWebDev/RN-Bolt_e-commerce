import React from "react";
import { Image, ImageBackground } from "react-native";
import Container from "../../components/Container";

const Splash = () => {
  return (
    <Container flex={1}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../../../assets/icons/loading/Rectangle20.png")}
      >
        <Container flex={2} justify="flex-end">
          <Image source={require("../../../assets/Logo.png")} />
        </Container>
        <Container flex={1} justify="center">
          <Image
            source={require("../../../assets/icons/loading/Lodingicon.png")}
          />
        </Container>
      </ImageBackground>
    </Container>
  );
};

export default Splash;
