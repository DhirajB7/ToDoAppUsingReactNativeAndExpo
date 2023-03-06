import React from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
