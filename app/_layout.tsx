import { ElprisProvider } from "@/context/elpris.provider";
import { Stack, Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { Animated } from "react-native";
import { useRef, useEffect, useState } from "react";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#d1603d",
    accent: "#d1603d",
  },
};

const queryClient = new QueryClient();

export default function RootLayout() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1, // Animate to full opacity
      duration: 1000, // Duration of the animation (0.5 seconds)
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  }, [opacity]);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <ElprisProvider>
          {/* <Animated.View style={{ flex: 1, opacity }}> */}
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: "#d1603d",
              tabBarInactiveTintColor: "#CDCDE0",
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: "#161622",
                borderTopWidth: 1,
                borderTopColor: "#232533",
                height: 84,
                opacity: opacity,
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
              name="elbovslistan/elbovslistan"
              options={{
                title: "Elbovslistan",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="bar-chart" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen
              name="kalkylator/kalkylator"
              options={{
                title: "Kalkylator",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="calculator" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen
              name="elspartips/elspartips"
              options={{
                title: "Tips",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="lightbulb-o" color={color} size={size} />
                ),
              }}
            />
          </Tabs>
          {/* </Animated.View> */}
        </ElprisProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
