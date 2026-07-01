import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInSchema = z.object({
  email: z.string({ message: "Email is required" }).email("Invalid email"),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
});

type SignInFields = z.infer<typeof signInSchema>;

export default function App() {
  // usando o React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  console.log(errors);

  // Função para lidar com o envio do formulário
  const onSignIn = (data: SignInFields) => {
    console.log(`Sign In:`, data.email, data.password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.form}>
        {/* Input email */}
        <CustomInput
          control={control}
          name="email"
          placeholder="Email"
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        />

        {/* Input password */}
        <CustomInput
          control={control}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />

        {/* Button to submit */}
        <CustomButton onPress={handleSubmit(onSignIn)} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  form: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
