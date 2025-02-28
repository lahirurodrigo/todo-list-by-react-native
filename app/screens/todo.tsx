import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/todoSlice";
import { RootState } from "../redux/store";
import { useRouter } from "expo-router";

export default function TodoScreen() {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todo.todos);
    const router = useRouter(); // Use router for navigation

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a task"
                value={newTodo}
                onChangeText={setNewTodo}
            />

            <View style={styles.buttonContainer}>
                <Button title="Add Todo" onPress={() => {
                    if (newTodo.trim()) {
                        dispatch(addTodo(newTodo));
                        setNewTodo("");
                    }
                }} />
            </View>


            <Button
                title="View Completed Tasks"
                onPress={() => router.push("/screens/completed")}
            />

            <FlatList
                data={todos.filter(todo => !todo.completed)} // Show only pending tasks
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                            <Text style={[styles.todoText, item.completed && styles.completed]}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <Button title="❌" onPress={() => dispatch(deleteTodo(item.id))} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    todoItem: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1 },
    todoText: { fontSize: 18 },
    completed: { textDecorationLine: "line-through", color: "gray" },
    buttonContainer: {
        marginBottom: 10, // Adds space between buttons
    }
});
