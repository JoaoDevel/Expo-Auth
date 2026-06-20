import { TextInput, StyleSheet, TextInputProps } from "react-native";

type CustomInputProps = {
    // Custom fields
} & TextInputProps

export default function CustomInput({ ...props }: CustomInputProps) {
    return (
        <TextInput style={styles.input} {...props}/>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius:5,
    }
})