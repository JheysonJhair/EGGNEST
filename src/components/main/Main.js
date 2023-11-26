import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TemperaturaIcon from "../common/TemperaturaIcon";
import HumedadIcon from "../common/HumedadIcon";
import VentilacionIcon from "../common/Agua";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainScreen = ({ navigation }) => {
  const [velocidades, setVelocidades] = useState(["alta", "alta", "alta"]);
  const [humedades, setHumedades] = useState([10, 10, 10]);
  const [temperaturas, setTemperaturas] = useState([15, 15, 15]);

  const [focoEncendido, setFocoEncendido] = useState(false);
  const [ventiladorEncendido, setVentiladorEncendido] = useState(false);

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

  const encenderVentilador = () => {
    setVentiladorEncendido(true);
  };

  const apagarVentilador = () => {
    setVentiladorEncendido(false);
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

      <Text style={styles.text1}>
        <Text style={styles.textColor}>Hola </Text>Jhair, Bienvenido
      </Text>

      <View style={styles.logoAndInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.infoContainerImage}>
          <Text style={styles.text2}>TIPO: Gallina</Text>
          <View style={styles.containerMap}>
            <FontAwesome name="map-marker" size={20} color="#8d4925" />
            <Text style={styles.text4}>Bella vista baja</Text>
          </View>
          <View style={styles.containerMap}>
            <FontAwesome name="circle" size={13} color="#48c26c" />
            <Text style={styles.text5}>Tu ave favorita en proceso!</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.text5}>Tiempo</Text>
          <Text style={styles.text6}>20 días</Text>
        </View>
        <View style={styles.infoItem3}>
          <Text style={styles.text5}>Fecha inicio</Text>
          <Text style={styles.text6}>12/12/12</Text>
        </View>
        <View style={styles.infoItem2}>
          <Text style={styles.text5}>Fecha fin</Text>
          <Text style={styles.text6}>En proceso</Text>
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
          <View style={styles.content2}>
            <Animatable.View
              animation="fadeIn"
              duration={1000}
              style={styles.focoContainer}
            >
              <MaterialCommunityIcons
                name="fan"
                size={52}
                color={ventiladorEncendido ? "#2859ad" : "#565557"}
              />
            </Animatable.View>

            <View style={styles.botonesContainer}>
              <TouchableOpacity
                onPress={encenderVentilador}
                disabled={ventiladorEncendido}
              >
                <FontAwesome
                  name="power-off"
                  size={26}
                  marginRight={3}
                  color={ventiladorEncendido ? "#009846" : "#565557"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={apagarVentilador}
                disabled={!ventiladorEncendido}
              >
                <FontAwesome
                  name="power-off"
                  size={26}
                  marginLeft={3}
                  color={!ventiladorEncendido ? "#DB4437" : "#565557"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content2}>
            <Animatable.View
              animation="fadeIn"
              duration={1000}
              style={styles.focoContainer}
            >
              <FontAwesome
                name="lightbulb-o"
                size={52}
                color={focoEncendido ? "#f4b415" : "#565557"}
              />
            </Animatable.View>

            <View style={styles.botonesContainer}>
              <TouchableOpacity onPress={prenderFoco} disabled={focoEncendido}>
                <FontAwesome
                  name="power-off"
                  size={26}
                  marginRight={3}
                  color={focoEncendido ? "#009846" : "gray"}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={apagarFoco} disabled={!focoEncendido}>
                <FontAwesome
                  name="power-off"
                  size={26}
                  marginLeft={3}
                  color={!focoEncendido ? "#DB4437" : "gray"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerDetalles}>
        <Text style={styles.buttonText}>Ver detalles</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Proceso de incubación</Text>
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
    backgroundColor: "#f5f5f0",
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
    backgroundColor: "#eae8e8",
    borderRadius: 10,
    padding: 10,
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
  infoItem3: {
    width: "33%",
    alignItems: "center",
    height: "100%",
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text2: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text3: {
    fontSize: 13,
  },
  text4: {
    fontSize: 14,
    marginLeft: 10,
    color: "#8d4925",
    fontWeight: "bold",
  },
  textColor: {
    color: "#d39400",
  },
  text5: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#565557",
  },
  text6: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  containerMap: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F4B415",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ////////////////////////////
  gif: {
    width: "100%",
    height: 195,
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
    flexDirection: "row",
    height: 110,
    marginBottom: 20,
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
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  rightContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  content2: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  focoContainer: {
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: "row",
    marginLeft: 5,
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