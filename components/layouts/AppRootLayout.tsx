import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";

function useAuth() {
  const [authState, setAuthState] = useState({
    context: { isReady: false },
    isAuthenticated: false,
    isNewUser: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAuthState({
        context: { isReady: true },
        isAuthenticated: false,
        isNewUser: true,
      });
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return authState;
}

export default function AppRootLayout() {
  const { isAuthenticated, isNewUser, context } = useAuth();
  const isReady = context.isReady;

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Stack>
      <Stack.Protected guard={isNewUser}>
        <Stack.Screen name="(setup)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
