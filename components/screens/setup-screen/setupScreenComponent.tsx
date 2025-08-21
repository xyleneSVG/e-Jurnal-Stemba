import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { fontSize } from "@/constants/Fonts";
import ScreenContainer from "@/components/ui/ScreenContainer";
import AppButton from "@/components/ui/AppButton";
import ProgressBar from "@/components/ui/AppProgressBar";

// eslint-disable-next-line import/no-unresolved
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

export default function SetupScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const handleNext = () => {
    setDirection("forward");
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection("backward");
      setCurrentStep((prev) => prev - 1);
    }
  };

  const getAnimation = () =>
    direction === "forward" ? FadeInRight : FadeInLeft;

  const renderStep = () => {
    const animation = getAnimation();

    switch (currentStep) {
      case 1:
        return (
          <Animated.View
            key="step1"
            entering={animation}
            style={styles.stepContent}
          >
            <StepOne />
          </Animated.View>
        );
      case 2:
        return (
          <Animated.View
            key="step2"
            entering={animation}
            style={styles.stepContent}
          >
            <StepTwo />
          </Animated.View>
        );
      default:
        return (
          <Animated.View
            key="finish"
            entering={animation}
            style={styles.stepContent}
          >
            <StepThree />
          </Animated.View>
        );
    }
  };

  return (
    <>
      <ProgressBar
        progress={currentStep === 1 ? 25 : currentStep === 2 ? 50 : 100}
        onBack={handleBack}
      />
      <ScreenContainer onlyPadding>
        <View style={styles.container}>
          {renderStep()}
          {currentStep < 3 && (
            <AppButton
              title="Selanjutnya"
              onPress={handleNext}
              backgroundColor="#FEA340"
              textColor="#fff"
              fontVariant={{ family: "PlusJakartaSans", weight: "bold" }}
              containerStyle={{ marginVertical: 10, borderRadius: 26 }}
              textStyle={{ fontSize: fontSize.sm }}
            />
          )}
        </View>
      </ScreenContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  stepContent: {
    flex: 1,
  },
});
