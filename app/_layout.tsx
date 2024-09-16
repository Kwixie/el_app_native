import { ElprisProvider } from "@/context/elpris.provider";
import { Stack, Tabs } from "expo-router";
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
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <ElprisProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ElprisProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
