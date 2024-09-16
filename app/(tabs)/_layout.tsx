import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#d1603d",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hem",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="elbovslistan"
        options={{
          title: "Elbovslistan",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="kalkylator"
        options={{
          title: "Kalkylator",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="elspartips"
        options={{
          title: "Tips",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="lightbulb-o" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
