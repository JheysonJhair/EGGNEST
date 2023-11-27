import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  CheckBox,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Admin = () => {
  const [cantidadHuevos, setCantidadHuevos] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [email, setEmail] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");

  useEffect(() => {
    setFechaInicio(getCurrentDate());
  }, []);

  const handleFormSubmit = () => {
    if ( cantidadHuevos && usuario && contrasena && email) {
      console.log("Cantidad de Huevos:", cantidadHuevos);
      console.log("Usuario:", usuario);
      console.log("Fecha de Inicio:", fechaInicio);
      console.log("Contraseña:", contrasena);
      console.log("Email:", email);
    } else {
      alert("Por favor, complete todos los campos y confirme la incubación.");
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
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
      <Text style={styles.title}>Registrar</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={contrasena}
          secureTextEntry
          onChangeText={(text) => setContrasena(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Cantidad de Huevos"
          value={cantidadHuevos}
          keyboardType="numeric"
          onChangeText={(text) => setCantidadHuevos(text)}
        />

        <View style={styles.checkboxContainer}>
          <AntDesign name="checkcircle" size={19} color="#ff9800" />
          <Text style={styles.checkboxText}>
            Iniciar incubación ahora <Text  style={styles.checkboxText2}>{fechaInicio}</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Enviar Datos</Text>
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  checkboxText2: {
    color: "#fff",
    fontSize: 16,
  },
  checkboxText2: {
    color: "#ff9800",
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default Admin;
