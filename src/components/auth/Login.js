import React, { useState } from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image } from "react-native";
import { loginUser } from '../../services/apiUser'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Main');
    /*try {
      const response = await loginUser(email, password);
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error de inicio de sesión:', error.message);
    }*/
    
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.vectorImage}
        resizeMode="contain"
      />
      <Text style={styles.title}>Iniciar sesión</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}> Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorImage: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
  },
  formContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#e5e3e3", 
    marginBottom: 20,
    paddingLeft: 15, 
    borderRadius: 10, 
    fontSize: 16, 
    backgroundColor: "#f4f4f4", 
    color: "#333", 
  },
  
  button: {
    backgroundColor: "#F4B415",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "#FF9800",
    fontSize: 14,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: "#333",
  },
  signUpLink: {
    fontSize: 14,
    color: "#FFC340",
    fontWeight: "bold",
  },
});

export default Login;
