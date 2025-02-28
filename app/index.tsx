import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {useRouter} from "expo-router";

export default function LoginScreen() {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
    if(username === 'User' && password === 'user'){
      router.replace('/screens/todo');
    }
  }
  return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput style={styles.textFields} placeholder='Username' onChangeText={setUsername}/>
        <TextInput style={styles.textFields} placeholder='Password' secureTextEntry onChangeText={setPassword}/>
        <Button onPress={handleLogin} title='Login'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent: "center",
    padding: 20
  },
  loginText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  textFields :{
    borderWidth: 1,
    padding: 10,
    marginBottom : 10
  },
});