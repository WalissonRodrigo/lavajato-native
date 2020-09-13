import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Users from "./components/Users";
import Companies from "./components/Companies";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Users />
        <Companies />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "center",
    padding: 4
  },
});
