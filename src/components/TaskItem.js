import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = ({ task, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
  },
});

export default TaskItem;
