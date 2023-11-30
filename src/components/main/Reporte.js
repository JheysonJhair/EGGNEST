import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, BarChart, Grid } from "react-native-svg-charts";
import { dataTemperatura } from '../../services/apiDataTemperatura'; 
import { dataHumedad } from '../../services/apiDataHumedad'; 

const ReportScreen = () => {
  const currentDate = new Date();
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);
  const [actualizarDatos, setActualizarDatos] = useState(true);
  const [fechaInicio, setFechaInicio] = useState("");
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };

  useEffect(() => {
    setFechaInicio(getCurrentDate());
    const fetchData = async () => {
      try {
        const response = await dataTemperatura(100); 
        setApiData(response);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
      }
    };
    const fetchData1 = async () => {
      try {
        const response = await dataHumedad(100); 
        setApiData2(response);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
      fetchData1();
      setActualizarDatos((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [actualizarDatos]);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reporte</Text>

      <View style={styles.reportContainer}>
        <Text>Fecha: {fechaInicio}</Text>
        <Text>Hora: {hours}:{minutes}</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Temperatura: </Text>
        <Text >Ultima temperatura: {apiData[0]} </Text>
        <LineChart
          style={{ height: 200 }}
          data={apiData} 
          svg={{ stroke: "rgb(134, 65, 244)" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Humedad: </Text>
        <Text >Ultima temperatura: {apiData2[0]} </Text>
        <LineChart
          style={{ height: 200 }}
          data={apiData2}
          svg={{ stroke: "rgb(134, 65, 244)" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reportContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  chartContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ReportScreen;
