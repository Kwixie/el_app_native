import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export type ElItemTs = {
  id: number;
  icon: string;
  description: string;
  power: number;
  duration: number;
};

interface ElItemProps {
  device: ElItemTs;
  pricePerKwh: number;
}

const ElItem = ({ device, pricePerKwh }: ElItemProps) => {
  const calculateCost = (
    power: number,
    duration: number,
    pricePerKwh: number
  ) => {
    return Math.round(((power * duration * pricePerKwh) / 1000) * 100) / 100;
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name={device.icon}
            size={40}
            color="#d1603d"
            style={{ paddingRight: 10 }}
          />
          <Text style={styles.text}>{device.description}</Text>
        </View>
        <Text style={styles.text}>
          {calculateCost(device.power, device.duration, pricePerKwh)} kr
        </Text>
      </View>
      <Text style={{ textAlign: "center", fontSize: 18, color: "grey" }}>
        {`${device.power}W x ${device.duration}h = ${
          Math.round(((device.power * device.duration) / 1000) * 100) / 100
        } kWh`}
      </Text>
    </View>
  );
};

export default ElItem;

const styles = StyleSheet.create({
  container: {
    borderColor: "#d1603d",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
});
