import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} from "@/constants/Fonts";

type FontFamilyKey = keyof typeof fontFamily;
type FontWeightKey = keyof typeof fontWeight;
type FontSizeKey = keyof typeof fontSize;
type LineHeight = keyof typeof lineHeight;

type Variant = {
  family?: FontFamilyKey;
  weight?: FontWeightKey;
};

type AppTextProps = TextProps & {
  variant?: Variant;
  size?: FontSizeKey;
  lineHeight?: LineHeight; 
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
};

export default function AppText({
  variant = { family: "Montserrat", weight: "regular" },
  size = "md",
  lineHeight: lineHeightKey, 
  style,
  children,
  ...rest
}: AppTextProps) {
  const font =
    fontFamily[variant.family ?? "Montserrat"][variant.weight ?? "regular"];
  const fontSizeValue = fontSize[size];
  const lineHeightValue = lineHeightKey ? lineHeight[lineHeightKey] : undefined;

  const combinedStyle: TextStyle = {
    fontFamily: font,
    fontSize: fontSizeValue,
    ...(lineHeightValue ? { lineHeight: lineHeightValue } : {}),
    ...((Array.isArray(style) ? Object.assign({}, ...style) : style) || {}),
  };

  return (
    <Text style={combinedStyle} {...rest}>
      {children}
    </Text>
  );
}
