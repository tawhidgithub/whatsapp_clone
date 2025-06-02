import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
