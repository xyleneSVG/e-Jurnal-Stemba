import { fontFamily } from "@/constants/Fonts";
import { Toaster } from 'sonner-native';

export default function AppToast() {
  return (
    <Toaster
      closeButton={false}
      position="top-center"
      theme="light"
      duration={1000}
      swipeToDismissDirection="up"
      offset={50}
      richColors
      styles={{
        title: { fontFamily: fontFamily.Montserrat.medium },
      }}
    />
  );
}
