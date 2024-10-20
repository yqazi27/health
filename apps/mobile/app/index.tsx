import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { trpc } from "../utils/trpc";

export default function Index() {
  const { data } = trpc.get.useQuery({ name: "John Doe" });

  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. {data?.message}</Text>
      <Link href="/details">View details</Link>
      <Link href="/new_visit">New visit</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
