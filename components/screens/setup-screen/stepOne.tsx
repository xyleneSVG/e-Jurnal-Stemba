import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import AppText from "@/components/ui/AppText";

const SCREEN_WIDTH = Dimensions.get("window").width;
const HORIZONTAL_PADDING = 40;
const GAP = 20;
const COLUMN_WIDTH = (SCREEN_WIDTH - HORIZONTAL_PADDING - GAP) / 2;

export default function StepOne() {
  return (
    <View>
      <AppText
        size="md"
        lineHeight="lg"
        variant={{ family: "PlusJakartaSans", weight: "bold" }}
        style={{ marginBottom: 20 }}
      >
        Catat kegiatan magangmu, presensi, dan laporan dengan lebih mudah
      </AppText>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ rowGap: 20 }}>
          <Animated.View
            entering={ZoomIn.duration(400).delay(100)}
            style={styles.largeBox}
          />
          <Animated.View
            entering={ZoomIn.duration(400).delay(200)}
            style={styles.smallBox}
          />
        </View>
        <View style={{ rowGap: 20 }}>
          <Animated.View
            entering={ZoomIn.duration(400).delay(300)}
            style={styles.smallBox}
          />
          <Animated.View
            entering={ZoomIn.duration(400).delay(400)}
            style={styles.largeBox}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  largeBox: {
    width: COLUMN_WIDTH,
    height: "50%",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  smallBox: {
    width: COLUMN_WIDTH,
    height: "32%",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
});
