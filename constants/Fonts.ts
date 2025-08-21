export const fontWeight = {
  thin: "100",
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
} as const;

export const fontFamily = {
  Montserrat: {
    thin: "Montserrat_100Thin",
    extraLight: "Montserrat_200ExtraLight",
    light: "Montserrat_300Light",
    regular: "Montserrat_400Regular",
    medium: "Montserrat_500Medium",
    semiBold: "Montserrat_600SemiBold",
    bold: "Montserrat_700Bold",
    extraBold: "Montserrat_800ExtraBold",
  },
  PlusJakartaSans: {
    thin: "PlusJakartaSans_100Thin",
    extraLight: "PlusJakartaSans_200ExtraLight",
    light: "PlusJakartaSans_300Light",
    regular: "PlusJakartaSans_400Regular",
    medium: "PlusJakartaSans_500Medium",
    semiBold: "PlusJakartaSans_600SemiBold",
    bold: "PlusJakartaSans_700Bold",
    extraBold: "PlusJakartaSans_800ExtraBold",
  },
} as const;

export const fontSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
} as const;

export const lineHeight = {
  _2xs: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  _2xl: 36,
  _3xl: 40,
  _4xl: 48,
  _5xl: 56,
};
