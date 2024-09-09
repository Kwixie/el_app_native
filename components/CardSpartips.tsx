import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export type CardSpartipsTs = {
  id: string;
  heading: string;
  text: string;
  example: string;
  exampleYear: string;
  kWhDiff: number;
  yearK: number;
  imageUrl: string;
};

interface CardSpartipsProps {
  tips: CardSpartipsTs;
  pricePerKwh: number;
}

export const CardSpartips = ({ tips, pricePerKwh }: CardSpartipsProps) => {
  const images: { [key: string]: any } = {
    "1": require("../assets/images/spartips/shower.jpg"),
    "2": require("../assets/images/spartips/radiator-cat.jpg"),
    "3": require("../assets/images/spartips/television-small.jpg"),
    "4": require("../assets/images/spartips/bulb.jpg"),
    "5": require("../assets/images/spartips/pot.jpg"),
    "6": require("../assets/images/spartips/dryer.jpg"),
    "7": require("../assets/images/spartips/microwave-small.jpg"),
    "8": require("../assets/images/spartips/kettle.jpg"),
    "9": require("../assets/images/spartips/washing-machine.jpg"),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images[tips.id]} />

      <View style={{ padding: 16 }}>
        <Text style={styles.heading}>{tips.heading}</Text>
        <Text style={styles.text}>{tips.text}</Text>
        <Text style={styles.text}>
          Just nu sparar du:{" "}
          <Text style={styles.coloredText}>
            {Math.round(pricePerKwh * tips.kWhDiff * 100) / 100}
            kr{" "}
          </Text>
          {tips.example}
        </Text>

        <Text style={styles.text}>
          {tips.exampleYear}{" "}
          <Text style={styles.coloredText}>
            {Math.round(tips.yearK * tips.kWhDiff * pricePerKwh)}
            kr.
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "#d1603d",
    // borderWidth: 3,
    // borderStyle: "solid",
    // borderRadius: 10,
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    // marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
  },
  coloredText: {
    // backgroundColor: "hsl(14, 62%, 70%)",
    borderRadius: 5,
    padding: 5,
    fontWeight: "bold",
  },
  heading: {
    color: "#d1603d",
    fontSize: 26,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    borderTopLeftRadius: 5, // Top-left corner
    borderTopRightRadius: 5, // Top-right corner
    borderBottomLeftRadius: 0, // Bottom-left corner
    borderBottomRightRadius: 0,
  },
});
