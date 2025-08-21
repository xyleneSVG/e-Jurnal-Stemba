import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  onlyPadding?: boolean;
};

export default function ScreenContainer({
  children,
  style,
  onlyPadding = false,
}: ScreenContainerProps) {
  if (onlyPadding) {
    return <View style={[styles.container, style]}>{children}</View>;
  }

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#ffffff",
  },
});
