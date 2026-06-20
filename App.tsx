import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import CustomInput from './src/components/CustomInput';

export default function App() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* <TextInput placeholder="Email" style={styles.input} autoFocus autoCapitalize="none" keyboardType="email-address" autoComplete="email"/>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true}/> */}

      <CustomInput placeholder="Email"  autoFocus autoCapitalize="none" keyboardType="email-address" autoComplete="email"/>
      <CustomInput placeholder="Password" secureTextEntry={true}/>

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
