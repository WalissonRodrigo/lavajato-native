import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-native-paper";
import { theme } from "./core/theme";
import Routes from "./routes";

export default function App() {
  return (
      <Provider theme={theme}>
        <Routes />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
