import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  const deleteTask = (index) => {
    setTasks((currentTasks) => currentTasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem task={item} onDelete={() => deleteTask(index)} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "gray",
    marginTop: 20,
  },
});

export default TodoScreen;
