import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true}/>

      <Pressable onPress={() => console.log("Pressable")} style={styles.button}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>

      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap:20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius:5,
  },
  title: {
    fontSize:20,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius:5,
    alignItems: "center"
  },
  text:{
    color: "#fff",
    fontWeight: "bold"
  }

});
