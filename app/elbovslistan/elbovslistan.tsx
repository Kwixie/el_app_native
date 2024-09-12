import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ElItem from "@/components/ElItem";
import POWER_DATA from "@/assets/power-data";
import { ElItemTs } from "@/components/ElItem";
import { useContext } from "react";
import { ElprisContext } from "../../context/elpris.provider";

const Elbovslistan = () => {
  const { pricePerKwh } = useContext(ElprisContext);
  const data: ElItemTs[] = POWER_DATA.sort(
    (a, b) => b.power * b.duration - a.power * a.duration
  );

  return (
    <SafeAreaView style={{ height: "100%", padding: 10 }}>
      <Text style={{ fontSize: 26, textAlign: "center", margin: 10 }}>
        Elbovslistan
      </Text>
      {/* <View style={{ flex: 1, padding: 10 }}>
        <ElItem />
      </View> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ElItem device={item} pricePerKwh={pricePerKwh} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Elbovslistan;

const styles = StyleSheet.create({});
