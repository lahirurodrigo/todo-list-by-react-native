import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function CompletedTasksScreen() {
    const todos = useSelector((state: RootState) => state.todo.todos);
    const completedTodos = useMemo(() => todos.filter(todo => todo.completed), [todos]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Completed Tasks</Text>
            <FlatList
                data={completedTodos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.completed}>{item.text}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    completed: { fontSize: 18, textDecorationLine: "line-through", color: "gray" },
});
