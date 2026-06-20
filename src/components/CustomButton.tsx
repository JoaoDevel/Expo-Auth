import { Pressable, Text, StyleSheet, PressableProps } from "react-native";

type CustomButtonProps ={
    // Custom fields
} & PressableProps

export default function CustomInput( props : CustomButtonProps) {
    return (
        <Pressable style={styles.button} {...props}>
                <Text style={styles.text}>Sign In</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
})