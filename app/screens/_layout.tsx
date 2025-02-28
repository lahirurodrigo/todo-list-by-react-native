import {Drawer} from "expo-router/drawer";

export default function Screens() {
    return (
        <Drawer >
            <Drawer.Screen name="todo" options={{title : "Todos"}}/>
            <Drawer.Screen name="completed" options={{title : "Completed Tasks"}}/>
        </Drawer>
    );
}