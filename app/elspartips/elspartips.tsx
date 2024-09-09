import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { useContext } from "react";
import { ElprisContext } from "../../context/elpris.context";
import { CardSpartips, CardSpartipsTs } from "@/components/CardSpartips";
import SPARTIPS_DATA from "@/assets/spartips-data";

const Elspartips = () => {
  const data: CardSpartipsTs[] = SPARTIPS_DATA;
  const { pricePerKwh } = useContext(ElprisContext) as { pricePerKwh: number };
  return (
    <SafeAreaView
      style={{ height: "100%", padding: 10, backgroundColor: "#cbcbcb" }}
    >
      <Text
        style={{
          fontSize: 26,
          textAlign: "center",
          margin: 10,
          marginTop: 30,
        }}
      >
        Spartips
      </Text>
      {/* <View style={{ flex: 1, padding: 10 }}>
        <ElItem />
      </View> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardSpartips tips={item} pricePerKwh={pricePerKwh} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Elspartips;

const styles = StyleSheet.create({});
