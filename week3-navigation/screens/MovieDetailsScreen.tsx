import { View, Text, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "MovieDetails"
>;

export default function MovieDetailsScreen({ route }: Props) {
  const { movieId } = route.params;
  const { movieTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Details</Text>

      <Text>Movie ID: {movieId}</Text>
      <Text>Movie Title: {movieTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});