import {
  TextInput,
  StyleSheet,
  TextInputProps,
  Text,
  View,
} from "react-native";
import { Controller } from "react-hook-form";

type CustomInputProps = {
  // Custom fields
  control: any;
  name: string;
} & TextInputProps;

export default function CustomInput({
  control,
  name,
  ...props
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.input}
          />
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
  },
  container: {
    gap: 3,
  },
});
