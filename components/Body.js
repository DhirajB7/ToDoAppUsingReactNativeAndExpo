import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
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
    if(todo.map(a => a.text).includes(String(task).toLowerCase())){
        Alert.alert("Hmmm!!!","Task already present in list.",[{text:"understood"}])
    }else{
        const id = [...todo.map((item) => item.id).sort()].pop() + 1;
        settodo([...todo, { text: task, id }]);
    }
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
