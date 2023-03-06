import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Text } from "react-native";
import ToDoItem from "./ToDoItem";
import ToDoAdder from "./ToDoAdder";

const Body = () => {
  const [todo, settodo] = useState([
    { text: "eat", id: 1 },
    { text: "code", id: 2 },
    { text: "sleep", id: 3 },
  ]);

  const keyPressed = (id) => {
    settodo((preData) => preData.filter((item) => item.id != id));
  };

  const updateTask = (task) => {
    if (todo.map((a) => a.text).includes(String(task).toLowerCase())) {
      Alert.alert("Hmmm!!!", "Task already present in list.", [
        { text: "understood" },
      ]);
    } else {
      let id = [...todo.map((item) => item.id).sort()].pop();
      id = id ? id + 1 : 1;
      settodo([...todo, { text: task, id }]);
      console.log(task, id);
    }
  };

  return (
    <View style={styles.bodyContainer}>
      <View>
        <ToDoAdder updateTask={updateTask} />
      </View>
      <View style={styles.listContainer}>
        {todo.length > 0 ? (
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <ToDoItem item={item} keyPressed={keyPressed} />
            )}
          />
        ) : (
          <View>
            <Text style={styles.noTaskMessage1}>You have completed all tasks.</Text>
            <Text style={styles.noTaskMessage2}>Psst!! You can still do many tasks.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    padding: 16,
  },
  noTaskMessage1: {
    fontSize: 28,
    color:"coral",
    marginTop:10,
    textAlign:"center"

  },
  noTaskMessage2: {
    fontSize: 24,
    color:"teal",
    marginTop:16,
    textAlign:"center"
  },
  listContainer: {
    flex: 1,
  },
});

export default Body;
