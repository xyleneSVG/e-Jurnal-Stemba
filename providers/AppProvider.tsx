import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { KeyboardProvider } from 'react-native-keyboard-controller';
import { FontLoaderProvider } from "./FontProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FontLoaderProvider>
        {/* <KeyboardProvider statusBarTranslucent={true}> */}
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {children}
        </ThemeProvider>
        {/* </KeyboardProvider> */}
      </FontLoaderProvider>
    </GestureHandlerRootView>
  );
}
