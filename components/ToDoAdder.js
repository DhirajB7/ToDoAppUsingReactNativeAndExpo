import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const ToDoAdder = ({ updateTask }) => {
  const [text, settext] = useState("");

  const buttonPressed = () => {
    if (text.length > 3) {
      updateTask(text);
      settext("");
      Keyboard.dismiss();
    } else {
      Alert.alert("OOPS!", "Word must be greater then 3 letters", [
        { text: "Got IT" },
      ]);
    }
  };

  return (
    <View style={styles.toDoAddContainer}>
      <TextInput
        style={styles.input}
        placeholder="add to do"
        value={text}
        onChangeText={(val) => settext(val)}
        autoCorrect={true}
      />
      <Button title="add task" color="teal" onPress={() => buttonPressed()} />
    </View>
  );
};

const styles = StyleSheet.create({
  toDoAddContainer: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    borderStyle: "solid",
    height: 50,
    padding: 8,
    fontSize: 16,
    color: "coral",
    marginBottom: 24,
  },
});

export default ToDoAdder;
