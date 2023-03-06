import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const ToDoAdder = ({ updateTask }) => {
  const [text, settext] = useState("");

  const buttonPressed = () => {

    if(text.length > 3) {
        updateTask(text);
        settext("");
    }else{

    }
    
  };

  return (
    <View style={styles.toDoAddContainer}>
      <TextInput
        style={styles.input}
        placeholder="add new to do"
        value={text}
        onChangeText={(val) => settext(val)}
        autoCorrect={true}
      />
      <Button
        title="add task"
        color="teal"
        onPress={() => buttonPressed()}
      />
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
    borderStyle: "dashed",
    height: 50,
    padding: 8,
    fontSize: 16,
    color: "coral",
    marginBottom: 24,
  },
});

export default ToDoAdder;
