import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ElprisContext } from "../../context/elpris.provider";
import React, { useContext, useEffect, useMemo, useState } from "react";
import POWER_DATA from "../../assets/power-data";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Button,
  TextInput,
  Portal,
  Modal,
  IconButton,
} from "react-native-paper";

function HomeInfoModal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              margin: 20,
              minWidth: "90%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <ScrollView>
              <Text style={[styles.bigText, styles.whiteText]}>Om Sidan</Text>
              <Text style={styles.netOwnerText}>
                Ofta när vi pratar om el pratar vi om elspotpriset, vad en
                kilowattimme kostar på elprismarknaden. Men för att ta reda på
                vad den totala konstnaden blir för slutkonsumenten behöver man
                räkna på både energiskatt, moms och elöverföringsavgift. Den här
                sidan är tänkt som en hjälp att snabbt se vad den totala
                kostnaden blir efter alla skatter och extra avgifter är
                inräknade. Ofta ligger det någonstans 3-4 gånger högre än själva
                elspotpriset.
              </Text>
              <Text style={styles.subHeading}>
                Hur räknas totalkostnaden ut?
              </Text>
              <Text style={styles.netOwnerText}>
                Totalkostnaden räknas ut genom att använda det aktuella
                elspotpriset + energiskatten på 0.392 kr/kWh + en
                elöverföringsavgift på 0.25 kr/kWh {"("}eller anpassat värde
                {")"}. Summan multipliceras sedan med momssatsen som ligger på
                25%.
              </Text>

              <Text style={styles.subHeading}>Blir kostnaden exakt?</Text>
              <Text style={styles.netOwnerText}>
                Nej. Uträkningarna bygger på genomsnittliga förbrukningsvärden
                av olika apparater. Förbrukningen för just din diskmaskin eller
                kaffekokare kan mycket väl vara lägre eller högre, beroende på
                hur gammal den är och energiklass. Det är också olika om man
                betala för varmvatten och uppvärmning. Bor man i hus eller villa
                är det vanligt att man gör det, men bor man i lägenhet är det
                inte lika vanligt. Dessutom har kostnad för elcertifikat
                exkluderats för att förenkla beräkningar. Vad man betalar för
                det kan variera ganska mycket, men vanligt är att det bara utgör
                någon till några procent av vad man totalt sett betalar för sin
                el. Och så får man inte glömma att man ofta har fasta
                abonnemangsavgifter både hos sitt elbolag och sin
                elnätsleverantör. Skulle man räkna ut en snittkostnad för sina
                kilowattimmar inkluderat dessa så kommer kostnaden att se högre
                ut.
              </Text>
            </ScrollView>
            <IconButton
              icon="close-circle"
              size={50}
              iconColor="#d1603d"
              style={{ position: "absolute", bottom: 5, right: 0 }}
              onPress={() => setVisible(false)}
            />
          </View>
        </Modal>
      </Portal>
      <IconButton
        icon="information"
        size={50}
        iconColor="black"
        style={{ position: "absolute", top: 10, right: 10 }}
        onPress={() => setVisible(true)}
      />
    </>
  );
}

function NetOwnerModal() {
  const [visible, setVisible] = useState(false);
  const { setNetOwnerPrice } = useContext(ElprisContext);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              height: 300,
              width: 260,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <Text style={{ fontSize: 20, color: "black", marginBottom: 12 }}>
              Nätägarpris i kr/kWh
            </Text>
            <Text style={{ fontSize: 16, color: "gray", marginBottom: 12 }}>
              De beräknade värdena på denna sidan inkluderar energiskatt, moms
              och en genomsnittlig nätöverföringsavgift på 25 öre/kWh.
              Nätöverföringsavgiften kan dock variera mycket, kolla på din
              senaste elfaktura och anpassa nedan.
            </Text>
            <TextInput
              keyboardType="numeric"
              style={{
                maxHeight: 50,
                fontSize: 20,
                backgroundColor: "hsl(14, 62%, 90%)",
              }}
              onSubmitEditing={({ nativeEvent: { text } }) => {
                console.log(text);
                setNetOwnerPrice(Number(text));
                setVisible(false);
              }}
            />
          </View>
        </Modal>
      </Portal>
      <Button
        style={{ backgroundColor: "black", marginTop: 20, padding: 2 }}
        textColor="white"
        onPress={() => setVisible(true)}
      >
        Anpassa nätägaravgift
      </Button>
    </>
  );
}

export default function Index() {
  const { currentElpris, pricePerKwh, setElprisArea, elprisArea } =
    useContext(ElprisContext);
  const [animationShowerCost, setAnimationShowerCost] = useState("0.00");
  const { height } = Dimensions.get("window");

  const hotShower = useMemo(() => {
    return (
      (POWER_DATA.find((x) => x.id === 1)!.power * 0.2 * pricePerKwh) /
      1000
    ).toFixed(2);
  }, [pricePerKwh]);

  useEffect(() => {
    const countUpShowerCost = (currentShowerPrice: number) => {
      let i = 0;
      let countInterval = 1;
      const interval = setInterval(() => {
        i += countInterval;
        console.log(`dushpriset`, currentShowerPrice);
        console.log("i", i);
        console.log("subtraktionen", countInterval);
        if (countInterval > 0.05) {
          countInterval *= 0.95;
        }
        //else {
        //   countInterval = 0; // Prevent floating-point precision issues
        // }
        if (i < currentShowerPrice) {
          setAnimationShowerCost(i.toFixed(2));
        }
        if (i >= currentShowerPrice) {
          console.log("clearing interval");
          i = currentShowerPrice;
          setAnimationShowerCost(i.toFixed(2));
          clearInterval(interval);
        }
      }, 100);
    };
    countUpShowerCost(Number(hotShower));
  }, [hotShower]);

  const handleNewElprisArea = (area: string) => {
    setElprisArea(area);
  };

  return (
    <SafeAreaView style={{ height: height }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d1603d",
        }}
      >
        <HomeInfoModal />
        {/* <KeyboardAvoidingView style={{ height: 200 }} behavior="height"> */}
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
          <Text style={{ fontWeight: 600, fontSize: 30 }}>
            {animationShowerCost} kr
          </Text>
        </View>
        {/* </KeyboardAvoidingView> */}
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
        <NetOwnerModal />
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
  subHeading: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  netOwnerText: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
});
