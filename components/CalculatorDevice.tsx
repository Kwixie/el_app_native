import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-paper-dropdown";
import { TextInput, Button, Menu, Divider } from "react-native-paper";
import POWER_DATA from "@/assets/power-data";
import { Device, ModifiedPowerData } from "../app/kalkylator/kalkylator";
import { set } from "react-hook-form";
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";
import Icon from "react-native-vector-icons/FontAwesome";

type CalculatorDeviceProps = {
  id: string | number[];
  powerDataDropdown: ModifiedPowerData[];
  pricePerKwh: number;
  setDeviceArray: React.Dispatch<React.SetStateAction<Device[]>>;
};

const CalculatorDevice = ({
  id,
  powerDataDropdown,
  pricePerKwh,
  setDeviceArray,
}: CalculatorDeviceProps) => {
  const [device, setDevice] = useState<string>();
  const [effect, setEffect] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [showInputs, setShowInputs] = useState(false);
  const [savings, setSavings] = useState<number>(0);

  useEffect(() => {
    setDeviceArray((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, savings } : item
      );
    });
  }, [savings]);

  useEffect(() => {
    setSavings(calculateSaving());
  }, [effect, duration]);

  const handleSelect = (value: string | undefined) => {
    if (value) {
      setDevice(value);
    } else {
      return;
    }
    setShowInputs(true);

    const selectedDevice = POWER_DATA.find((item) => item.device === value);
    const duration = selectedDevice ? selectedDevice.duration * 60 : 0;
    const effect = selectedDevice ? selectedDevice.power : 0;
    setDuration(duration);
    setEffect(effect);
  };

  const calculateSaving = () => {
    if (!Number.isNaN(duration) || !Number.isNaN(effect)) {
      return (
        Math.round(((((effect * duration) / 60) * pricePerKwh) / 1000) * 100) /
        100
      );
    }
    return savings;
  };

  const handleDurationChange = (value: string) => {
    setDuration(parseInt(value));
  };

  const handleEffectChange = (value: string) => {
    setEffect(parseInt(value));
  };

  const handleDelete = () => {
    setDeviceArray((prevState) => prevState.filter((item) => item.id !== id));
  };

  const checkInteger = (value: number) =>
    Number.isInteger(value) ? value.toString() : "";

  return (
    <View style={{ gap: 8 }}>
      <View>
        <Dropdown
          label="Apparat"
          placeholder="Välj apparat"
          options={powerDataDropdown}
          value={device}
          onSelect={(value) => handleSelect(value)}
          maxMenuHeight={400}
          CustomDropdownInput={({ selectedLabel }) => {
            return (
              <TextInput
                placeholder="Välj apparat"
                label={selectedLabel}
                mode="outlined"
                disabled={false}
                error={false}
                style={styles.input}
                right={<TextInput.Icon icon="chevron-down" color={"white"} />}
                placeholderTextColor="white"
                theme={{ colors: { onSurfaceVariant: "white" } }}
                outlineColor="#d1603d"
              />
            );
          }}
          CustomDropdownItem={({ option, onSelect, toggleMenu }) => {
            return (
              <>
                <Menu.Item
                  title={option.label}
                  disabled={false}
                  style={{
                    backgroundColor: "hsl(14, 62%, 90%)",
                    maxWidth: "100%",
                  }}
                  //   rippleColor="transparent"
                  //   contentStyle={{ backgroundColor: "hsl(14, 62%, 90%)" }}
                  //   titleStyle={{ backgroundColor: "hsl(14, 62%, 90%)" }}
                  onPress={() => {
                    if (option.value) {
                      onSelect?.(option.value);
                    }
                    toggleMenu();
                  }}
                />
                <Divider style={{ borderColor: "black" }} />
              </>
            );
          }}
        />
      </View>
      {showInputs && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            // marginBottom: 14,
            // marginTop: -14,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              marginRight: 4,
              backgroundColor: "hsl(14, 62%, 90%)",
              color: "orange",
            }}
            placeholderTextColor={"black"}
            textColor="black"
            label="Effekt"
            value={checkInteger(effect)}
            onChangeText={(value) => handleEffectChange(value)}
            keyboardType="numeric"
          />
          <TextInput
            style={{
              flex: 1,
              marginHorizontal: 4,
              backgroundColor: "hsl(14, 62%, 90%)",
            }}
            label="Tid i minuter"
            value={checkInteger(duration)}
            onChangeText={(value) => handleDurationChange(value)}
            keyboardType="numeric"
          />
          <TextInput
            style={{ flex: 1, marginLeft: 4 }}
            label="Totalt"
            value={!Number.isNaN(savings) ? savings.toString() + " kr" : " kr"}
            disabled={true}
          />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Button textColor={"#d1603d"} onPress={handleDelete}>
              Ta bort
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default CalculatorDevice;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#d1603d",
    borderColor: "#d1603d",
  },
});
