import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TemperaturaIcon from "../common/TemperaturaIcon";
import HumedadIcon from "../common/HumedadIcon";
import AguaIcon from "../common/Agua";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getUserData } from "../../services/apiGetTemperaturaHumedad";

import { updateVentilador } from "../../services/apiControlesVentilador";
import { updateFoco } from "../../services/apiControlesFoco";
import { getIncubatorDataById } from "../../services/apiGetIncuvadora";

const MainScreen = ({ route, navigation }) => {
  const { userData } = route.params;
  const fechaInicio = userData.Huevos[0].FechaInicio;
  const fechaFormateada = new Date(fechaInicio).toLocaleDateString();

  const [temperatura, setTemperatura] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [incubadora, setIncubadora] = useState(null);

  const [focoEncendido, setFocoEncendido] = useState(false);
  const [ventiladorEncendido, setVentiladorEncendido] = useState(false);
  const [actualizarDatos, setActualizarDatos] = useState(true);
  const [error, setError] = useState(null);

  const fechaInicioObj = new Date(fechaInicio);
  const fechaActualObj = new Date();
  const diferenciaDias = Math.floor(
    (fechaActualObj - fechaInicioObj) / (1000 * 60 * 60 * 24)
  );


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setTemperatura(data.valorTemperatura);
        setHumedad(data.valorHumedad);
      } catch (error) {
        setError(error.message);
      }
    };
  
    const fetchUseIncubadora = async () => {
      try {
        const data = await getIncubatorDataById(userData.user.IdUser);
        const focoEncendido = data.foco === "0";
        const ventiladorEncendido = data.foco === "0";
        setVentiladorEncendido(ventiladorEncendido);
        setFocoEncendido(focoEncendido);
      } catch (error) {
        setError(error.message);
      }
    };
  
    const intervalId = setInterval(() => {
      fetchUserData();
      fetchUseIncubadora();
      setActualizarDatos((prev) => !prev);
    }, 10000);
  
    return () => clearInterval(intervalId);
  }, [actualizarDatos, userData.user.IdUser]);

  const handleVerDetalles = () => {
    navigation.navigate("Report");
  };


  const prenderFoco = () => {
    setFocoEncendido(true);
    updateFoco("0", 1)
      .then(() => console.log("Foco encendido actualizado en la API"))
      .catch((error) =>
        console.error("Error al actualizar foco encendido:", error)
      );
  };

  const apagarFoco = () => {
    setFocoEncendido(false);
    updateFoco("1", 1)
      .then(() => console.log("Foco apagado actualizado en la API"))
      .catch((error) =>
        console.error("Error al actualizar foco apagado:", error)
      );
  };

  const encenderVentilador = () => {
    setVentiladorEncendido(true);
    updateVentilador("0", 1)
      .then(() => console.log("Ventilador encendido actualizado en la API"))
      .catch((error) => console.error("Error al actualizar ventilador encendido:", error));
  };

  const apagarVentilador = () => {
    setVentiladorEncendido(false);
    updateVentilador("1", 1)
      .then(() => console.log("Ventilador apagado actualizado en la API"))
      .catch((error) => console.error("Error al actualizar ventilador apagado:", error));
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
        <Text style={styles.textColor}>Hola </Text>
        {userData.user.Nombre}, Bienvenido
      </Text>

      <View style={styles.logoAndInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.infoContainerImage}>
          <Text style={styles.text2}>TIPO: {userData.Huevos[0].Tipo}</Text>
          <View style={styles.containerMap}>
            <FontAwesome name="map-marker" size={20} color="#8d4925" />
            <Text style={styles.text4}>Bella vista baja</Text>
          </View>
          <View style={styles.containerMap}>
            {diferenciaDias >= 1 && diferenciaDias <= 12 && (
              <>
                <FontAwesome name="circle" size={13} color="#48c26c" />
                <Text style={styles.text0}>Tu ave favorita en linea!</Text>
              </>
            )}
            {diferenciaDias >= 13 && diferenciaDias <= 19 && (
              <>
                <FontAwesome name="circle" size={13} color="#e7ed36" />
                <Text style={styles.text0}>Tu ave favorita en proceso!</Text>
              </>
            )}
            {diferenciaDias >= 20 && diferenciaDias <= 50 && (
              <>
                <FontAwesome name="circle" size={13} color="#ed3d3d" />
                <Text style={styles.text0}>
                  Tu ave favorita está a punto de nacer!!
                </Text>
              </>
            )}
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.text5}>Tiempo</Text>
          <Text style={styles.text6}>{diferenciaDias} días</Text>
        </View>
        <View style={styles.infoItem3}>
          <Text style={styles.text5}>Fecha inicio</Text>
          <Text style={styles.text6}>{fechaFormateada}</Text>
        </View>
        <View style={styles.infoItem2}>
          <Text style={styles.text5}>Fecha fin</Text>
          {diferenciaDias >= 1 && diferenciaDias <= 7 && (
            <Text style={styles.text6}>1ra semana</Text>
          )}
          {diferenciaDias >= 8 && diferenciaDias <= 14 && (
            <Text style={styles.text6}>2da semana</Text>
          )}
          {diferenciaDias >= 15 && diferenciaDias <= 20 && (
            <Text style={styles.text6}>3ra semana</Text>
          )}
          {diferenciaDias >= 21 && diferenciaDias <= 50 && (
            <Text style={styles.text6}>Finalizando</Text>
          )}
        </View>
      </View>

      <Text style={styles.text1}>Controles</Text>

      <View style={styles.containerTemperatura}>
        <View style={styles.leftContainer}>
          <View style={styles.leftInnerContainer}>
            <AguaIcon velocidad="media" />
            <TemperaturaIcon temperatura={temperatura} />
            <HumedadIcon humedad={humedad} />
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
                  color={focoEncendido ? "#009846" : "#565557"}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={apagarFoco} disabled={!focoEncendido}>
                <FontAwesome
                  name="power-off"
                  size={26}
                  marginLeft={3}
                  color={!focoEncendido ? "#DB4437" : "#565557"}
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
    height: 50,
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
  text0: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#565557",
    marginLeft: 10,
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
    height: 220,
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
