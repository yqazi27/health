import { Text, View } from "react-native";
import { trpc } from "../utils/trpc";

export default function Index() {
  const { data } = trpc.get.useQuery({ name: "John Doe" });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen. {data?.message}</Text>
    </View>
  );
}
