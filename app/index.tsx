import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ElprisContext } from "../context/elpris.context";
import React, { useContext, useEffect, useState } from "react";
import POWER_DATA from "../assets/power-data";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

export default function Index() {
  const { currentElpris, setCurrentElpris, pricePerKwh } =
    useContext(ElprisContext);
  const [elprisArea, setElprisArea] = useState("SE4");

  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    let day = date.getDate().toString();
    if (day.length < 2) {
      day = "0" + day;
    }
    let monthNum = date.getMonth() + 1;
    let month = monthNum.toString();
    if (month.length < 2) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    let currentDate = `${year}/${month}-${day}`;

    fetch(
      `https://www.elprisetjustnu.se/api/v1/prices/${currentDate}_${elprisArea}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentElpris(Math.round(data[hour].SEK_per_kWh * 100) / 100);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [elprisArea, setCurrentElpris]);

  const handleNewElprisArea = (area: string) => {
    setElprisArea(area);
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d1603d",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            borderRadius: 10000,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            elevation: 12,
          }}
        >
          <Icon name="shower" size={80} color="#d1603d" />
          <Text style={styles.bigText}>En varm dusch kostar just nu</Text>
          <Text style={styles.bigText}>
            {Math.round(
              ((POWER_DATA[1].power * 0.2 * pricePerKwh) / 1000) * 10
            ) / 10}{" "}
            kr
          </Text>
        </View>
        <Text style={[styles.bigText, styles.whiteText, { marginBottom: 20 }]}>
          Elprisområde
        </Text>
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={[styles.smallButton, elprisArea === "SE1" && styles.active]}
            onPress={() => handleNewElprisArea("SE1")}
          >
            <Text style={{ fontSize: 24 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, elprisArea === "SE2" && styles.active]}
            onPress={() => handleNewElprisArea("SE2")}
          >
            <Text style={{ fontSize: 24 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, elprisArea === "SE3" && styles.active]}
            onPress={() => handleNewElprisArea("SE3")}
          >
            <Text style={{ fontSize: 24 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, elprisArea === "SE4" && styles.active]}
            onPress={() => handleNewElprisArea("SE4")}
          >
            <Text style={{ fontSize: 24 }}>4</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.smallText]}>
          Aktuellt elspotpris: {currentElpris}kr
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  smallButton: {
    height: 60,
    width: 60,
    backgroundColor: "#efefef",
    borderRadius: 10000,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  bigText: {
    fontSize: 26,
    textAlign: "center",
    maxWidth: 200,
  },
  smallText: {
    fontSize: 18,
    maxWidth: 200,
    textAlign: "center",
  },
  whiteText: {
    color: "white",
  },
  active: {
    borderStyle: "solid",
    borderColor: "#3c3c3c",
    borderWidth: 4,
  },
  image: {
    width: 500,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
