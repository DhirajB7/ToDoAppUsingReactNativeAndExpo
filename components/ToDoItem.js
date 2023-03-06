import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ToDoItem = ({ item, keyPressed }) => {
  const cardPressed = () => {
    keyPressed(item.id);
  };

  return (
    <TouchableOpacity onPress={() => cardPressed()}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.text}</Text>
        <AntDesign name="delete" size={24} color="coral" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#eee",
    margin: 8,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cardText: {
    fontSize: 24,
    color: "teal",
  },
});

export default ToDoItem;
