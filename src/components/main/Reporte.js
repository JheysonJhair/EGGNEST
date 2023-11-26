import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, BarChart, Grid } from "react-native-svg-charts";

const ReportScreen = () => {
  const dataLine = [20, 45, 28, 80, 99];
  const dataBar = [20, 45, 28, 80, 99, 43];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reporte</Text>

      <View style={styles.reportContainer}>
        <Text>Fecha: 25/11/2023</Text>
        <Text>Hora: 14:30</Text>
        <Text>Tipo: Reporte Diario</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Líneas</Text>
        <LineChart
          style={{ height: 200 }}
          data={dataLine}
          svg={{ stroke: "rgb(134, 65, 244)" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Barras</Text>
        <BarChart
          style={{ height: 200 }}
          data={dataBar}
          svg={{ fill: "rgb(134, 65, 244)" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </BarChart>
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
