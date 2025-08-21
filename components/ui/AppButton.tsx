import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import AppText from "./AppText"; // text component custom kamu

type FontFamilyKey = "Montserrat" | "PlusJakartaSans"; // sesuaikan dengan fontmu
type FontWeightKey = "regular" | "semiBold" | "bold";

type AppButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  backgroundColor?: string;
  textColor?: string;
  fontVariant?: { family?: FontFamilyKey; weight?: FontWeightKey };
  disabled?: boolean;
};

export default function AppButton({
  onPress,
  title,
  containerStyle,
  textStyle,
  backgroundColor = "#fea340",
  textColor = "#fff",
  fontVariant = { family: "PlusJakartaSans", weight: "semiBold" },
  disabled = false,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: disabled ? "#ccc" : backgroundColor },
        containerStyle,
      ]}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <AppText
        variant={fontVariant}
        style={[
          { color: textColor, textAlign: "center" },
          ...(Array.isArray(textStyle)
            ? textStyle
            : textStyle
            ? [textStyle]
            : []),
        ]}
        size="md"
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
