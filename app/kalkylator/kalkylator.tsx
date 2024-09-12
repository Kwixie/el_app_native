import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { Controller, set, useForm } from "react-hook-form";
import POWER_DATA from "@/assets/power-data";
import { Dropdown } from "react-native-paper-dropdown";
import { TextInput, Button } from "react-native-paper";
import { ElprisContext } from "@/context/elpris.provider";
import CalculatorDevice from "@/components/CalculatorDevice";
import Icon from "react-native-vector-icons/FontAwesome";
import uuid from "react-native-uuid";

export type ModifiedPowerData = {
  label: string;
  value: string;
};

export type Device = {
  id: string | number[];
  device: string;
  savings: number;
};

const powerDataDropdown: ModifiedPowerData[] = POWER_DATA.sort((a, b) =>
  a.device.localeCompare(b.device)
).map((item) => ({
  label: item.device,
  value: item.device,
}));

const Kalkylator = () => {
  const { pricePerKwh } = useContext(ElprisContext);
  const [deviceArray, setDeviceArray] = useState<Device[]>([
    { id: uuid.v4(), device: "", savings: 0 },
  ]);

  return (
    <SafeAreaView style={{ height: "100%", padding: 10 }}>
      <Text
        style={{
          fontSize: 26,
          textAlign: "center",
          margin: 10,
          marginTop: 30,
        }}
      >
        Kalkylator
      </Text>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={{
          minHeight: "30%",
          backgroundColor: "hsl(14, 62%, 90%)",
        }}
      >
        <View style={{ gap: 14, backgroundColor: "hsl(14, 62%, 90%)" }}>
          {deviceArray.map((device) => (
            <CalculatorDevice
              key={device.id.toString()}
              id={device.id}
              powerDataDropdown={powerDataDropdown}
              pricePerKwh={pricePerKwh}
              setDeviceArray={setDeviceArray}
            />
          ))}
        </View>
      </ScrollView>
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Button
          style={{ backgroundColor: "#d1603d", width: "100%" }}
          icon="plus"
          mode="contained"
          onPress={() =>
            setDeviceArray([
              { id: uuid.v4(), device: "", savings: 0 },
              ...deviceArray,
            ])
          }
        >
          Lägg till apparat
        </Button>
        <Text style={styles.bigText}>Summa alla apparater: </Text>
        <View style={styles.circle}>
          <Text
            style={{
              ...styles.bigText,
              paddingBottom: 5,
              color: "white",
              fontSize: 30,
              paddingTop: 0,
            }}
          >
            {deviceArray
              .reduce((acc, curr) => curr.savings + acc, 0)
              .toFixed(2)}{" "}
            kr
          </Text>
          <Icon name="money" size={42} color={"white"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Kalkylator;

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
  bigText: {
    fontSize: 26,
    textAlign: "center",
    paddingVertical: 20,
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    backgroundColor: "#d1603d",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 20,
  },
});
