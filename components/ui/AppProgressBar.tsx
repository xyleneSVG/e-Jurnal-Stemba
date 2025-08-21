import { StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import AppText from "./AppText";
import React from "react";

type ProgressBarProps = {
  progress: number;
  onBack?: () => void;
};

export default function ProgressBar({ progress, onBack }: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const progressValue = React.useRef(useSharedValue(clampedProgress)).current;

  React.useEffect(() => {
    progressValue.value = withTiming(clampedProgress, { duration: 500 });
  }, [clampedProgress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progressValue.value}%`,
  }));

  return (
    <View style={styles.wrapper}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>
        <AppText
          size="sm"
          variant={{ family: "PlusJakartaSans", weight: "semiBold" }}
          style={styles.percentageText}
        >
          {Math.round(clampedProgress)}%
        </AppText>
      </View>
      <View style={styles.progressBar}>
        <Animated.View style={[styles.progressFill, animatedStyle]} />
      </View>
    </View>
  );
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: "15%",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  topContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  backButton: {
    backgroundColor: "#fea340",
    borderRadius: 999,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  percentageText: {
    position: "absolute",
    left: "50%",
  },
  progressBar: {
    width: SCREEN_WIDTH,
    height: 8,
    backgroundColor: "#ddd",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#fea340",
  },
});
