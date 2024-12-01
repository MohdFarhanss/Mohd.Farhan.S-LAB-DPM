import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default TaskInput;
