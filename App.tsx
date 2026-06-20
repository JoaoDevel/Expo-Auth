import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import CustomInput from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';

export default function App() {

  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomInput placeholder="Email"  autoFocus autoCapitalize="none" keyboardType="email-address" autoComplete="email"/>
      <CustomInput placeholder="Password" secureTextEntry={true}/>

      <CustomButton onPress={() => console.log("Sign In pressed")} />

      
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
});
