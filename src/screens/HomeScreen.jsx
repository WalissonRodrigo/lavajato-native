import React, { memo, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { auth } from "../services/firebase";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    if (auth.currentUser) {
      navigation.navigate("Dashboard");
    }
  });

  return (
    <Background>
      <Logo />
      <Header>Firebase Login</Header>

      <Paragraph>
        This template supports Firebase authorization out of the box.
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
