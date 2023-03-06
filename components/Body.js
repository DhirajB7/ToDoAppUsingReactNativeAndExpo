import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ToDoItem from "./ToDoItem";
import ToDoAdder from "./ToDoAdder";

const Body = () => {
  const [todo, settodo] = useState([
    { text: "code today", id: 1 },
    { text: "sleep", id: 2 },
    { text: "play xbox", id: 3 },
  ]);

  const keyPressed = (id) => {
    settodo((preData) => preData.filter((item) => item.id != id));
  };

  const updateTask = (task) => {
    const lengthOfToDo = todo.length;
    const id = [...todo.map((item) => item.id).sort()].pop() + 1;
    settodo([...todo, { text: task, id }]);
  };

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.addContainer}>
        <ToDoAdder updateTask={updateTask} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <ToDoItem item={item} keyPressed={keyPressed} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex:1,
    padding: 16,
  },
  addContainer: {
  },
  listContainer: {
    flex:1,
  },
});

export default Body;
