import { View, FlatList, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../types/navigation";
import type { Movie } from "../types/Movie";

import {
  Appbar,
  Card,
  Button,
  Text,
  Divider,
  List,
} from "react-native-paper";

import movies from "../data/movies.json";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Movies"
>;

export default function MoviesScreen({ navigation }: Props) {
  const movieData: Movie[] = movies;
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Movies" />
      </Appbar.Header>

      <FlatList<Movie>
        data={movieData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Content>
              <Text variant="titleLarge">
                {item.title}
              </Text>

              <Text>
                {item.year} • {item.genre}
              </Text>

              <Text>
                ⭐ {item.rating}
              </Text>
            </Card.Content>

            <Card.Actions>
              <Button
                mode="contained"
                onPress={() =>
                  navigation.navigate("MovieDetails", {
                    movieId: item.id,
                    movieTitle: item.title,
                  })
                }
              >
                View Details
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  movieItem: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
  },

  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});