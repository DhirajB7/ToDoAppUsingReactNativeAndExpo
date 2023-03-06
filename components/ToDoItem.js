import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ToDoItem = ({item, keyPressed}) => {

    const cardPressed = () => {
        keyPressed(item.id)
    }

  return (
    <TouchableOpacity onPress={()=>cardPressed()}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.text}</Text>
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
  },
  cardText: {
    fontSize: 24,
    color:"teal"
  },
});

export default ToDoItem;
