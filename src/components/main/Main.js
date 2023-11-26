import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import TemperaturaIcon from "../common/TemperaturaIcon";
import HumedadIcon from "../common/HumedadIcon";
import VentilacionIcon from "../common/VentilacionIcon";
import * as Animatable from "react-native-animatable";

const MainScreen = ({ navigation }) => {
  const [velocidades, setVelocidades] = useState(["baja", "media", "alta"]); 
  const [humedades, setHumedades] = useState([40, 65, 30]);
  const [temperaturas, setTemperaturas] = useState([20, 20, 18])
  const [focoEncendido, setFocoEncendido] = useState(false);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleVerDetalles = () => {
    navigation.navigate("Report");
  };

  const handleNuevaVelocidad = (nuevaVelocidad) => {
    setVelocidades((prevVelocidades) => [...prevVelocidades, nuevaVelocidad]);
  };

  const handleNuevaHumedad = (nuevaHumedad) => {
    setHumedades((prevHumedades) => [...prevHumedades, nuevaHumedad]);
  };
;
  const handleNuevaTemperatura = (nuevaTemperatura) => {
    setTemperaturas((prevTemperaturas) => [
      ...prevTemperaturas,
      nuevaTemperatura,
    ]);
  };

  const prenderFoco = () => {
    setFocoEncendido(true);
  };

  const apagarFoco = () => {
    setFocoEncendido(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={21} color="black" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="bell" size={21} marginLeft={10} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.text1}>Hola, Jhair, Bienvenido</Text>
      <View style={styles.logoAndInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.infoContainerImage}>
          <Text style={styles.text2}>TIPO: Gallina</Text>
          <Text style={styles.text3}>Tu ave favorita en proceso!</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.text3}>Días</Text>
          <Text style={styles.text3}>20</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.text3}>Fecha inicio</Text>
          <Text style={styles.text3}>12/12/12</Text>
        </View>
        <View style={styles.infoItem2}>
          <Text style={styles.text3}>Fecha fin</Text>
          <Text style={styles.text3}>No definido</Text>
        </View>
      </View>
      <Text style={styles.text1}>Controles</Text>
      <View style={styles.containerTemperatura}>
        <View style={styles.leftContainer}>
          <View style={styles.leftInnerContainer}>
            <VentilacionIcon velocidades={velocidades} />
            <TemperaturaIcon temperaturas={temperaturas} />
            <HumedadIcon humedades={humedades} />
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Animatable.View
            animation="fadeIn"
            duration={1000}
            style={styles.focoContainer}
          >
            <FontAwesome
              name="lightbulb-o"
              size={40}
              color={focoEncendido ? "yellow" : "red"}
            />
          </Animatable.View>

          <View style={styles.botonesContainer}>
            <TouchableOpacity onPress={prenderFoco} disabled={focoEncendido}>
              <FontAwesome
                name="power-off"
                size={30}
                marginRight={3}
                color={focoEncendido ? "#4285F4" : "gray"}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={apagarFoco} disabled={!focoEncendido}>
              <FontAwesome
                name="power-off"
                size={30}
                marginLeft={3}
                color={!focoEncendido ? "#DB4437" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerDetalles}>
        <Text style={styles.buttonText}>Ver detalles</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Proceso de incuvación</Text>
      <View style={styles.containerGif}>
        <View style={styles.outerContainer}>
          <View style={[styles.centerChild, { width: "70%" }]}>
            <Image
              source={{
                uri: "https://media0.giphy.com/media/Y1Vq94Ivx0EtG/giphy.gif?cid=ecf05e47xcg4psz6jijexl0cyoucgcnwzdtwxbu1mhsrwg9g&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              }}
              style={styles.gif}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerIcons: {
    flexDirection: "row",
  },
  logoAndInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  logoContainer: {
    marginRight: 20,
  },
  logoContainerImage: {
    marginRight: 0,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60, 
  },
  infoItem: {
    width: "33%",
    height: "100%", 
  },
  infoItem2: {
    width: "33%",
    alignItems: "flex-end",
    height: "100%", 
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#edcf38",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ////////////////////////////
  gif: {
    width: "100%",
    height: 200,
  },
  containerGif: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerContainer: {
    flexDirection: "row",
    width: "100%",
  },
  centerChild: {
    flex: 3,
  },
  containerTemperatura: {
    flex: 0,
    flexDirection: "row",
    height: 80,
    marginBottom: 30,
  },
  leftContainer: {
    flex: 6,
    paddingRight: 20,
    height: "100%",
  },
  leftInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white", 
  },
  rightContainer: {
    flex: 2,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  focoContainer: {
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: "row",
    marginLeft:5
  },
  boton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MainScreen;
