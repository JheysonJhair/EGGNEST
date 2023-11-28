import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.vectorImage}
          resizeMode="contain"
        />

        <Animatable.Text animation="flipInX" style={styles.containerLogoText}>
          EGGNEST
        </Animatable.Text>
      </View>
      <Animatable.Text
        animation="flipInX"
        style={styles.containerLogoTextRespaldo}
      >
        Incubadora con IOT
      </Animatable.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9800",
  },
  containerLogo: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 10,
    textAlign: "center",
  },
  containerLogoTextRespaldo: {
    color: "#333233",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 2,
    paddingTop: 10,
    textAlign: "center",
    marginBottom: 70,
  },
  vectorImage: {
    width: 150,
    height: 150,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "25%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  Title: {
    fontSize: 24,
    fontWeight: 700,
    paddingTop: 28,
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: "#00000080",
    paddingBottom: 20,
  },
  button: {
    position: "absolute",
    backgroundColor: "#ff0000",
    borderRadius: 50,
    paddingVertical: 10,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default LoadingScreen;
