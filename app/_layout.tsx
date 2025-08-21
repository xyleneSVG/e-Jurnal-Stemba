import AppRootLayout from '@/components/layouts/AppRootLayout';
import AppToast from '@/components/ui/AppToast';
// import ConfirmationSheetHost from '@/components/ui/ConfirmationSheet';
import AppProvider from '@/providers/AppProvider';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppProvider>
      {/* <ConfirmationSheetHost /> */}
      <AppRootLayout />
      <AppToast />
      <StatusBar style="auto" />
    </AppProvider>
  );
}
