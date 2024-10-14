import { Stack } from "expo-router";
import { TRPCReactProvider } from "utils/TRPCReactProvider";

export default function RootLayout() {
  return (
    <TRPCReactProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="details" />
      </Stack>
    </TRPCReactProvider>
  );
}
