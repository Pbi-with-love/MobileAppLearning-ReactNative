import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';

interface Movie {
  id: string;
  title: string;
  year: string;
  rating: string;
  genre: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    year: '2010',
    rating: '8.8',
    genre: 'Sci-Fi',
    image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  },
  {
    id: '2',
    title: 'Interstellar',
    year: '2014',
    rating: '8.7',
    genre: 'Sci-Fi',
    image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    year: '2008',
    rating: '9.0',
    genre: 'Action',
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    id: '4',
    title: 'Parasite',
    year: '2019',
    rating: '8.5',
    genre: 'Drama',
    image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  },
];

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: movie.image }}
        style={styles.poster}
      />

      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{movie.title}</Text>

        <Text style={styles.movieDetails}>
          {movie.genre} • {movie.year}
        </Text>

        <Text style={styles.rating}>
          ⭐ {movie.rating}
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Movie Explorer</Text>
        <Text style={styles.subtitle}>
          Discover your next favorite movie
        </Text>
      </View>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        placeholderTextColor="#888"
      />

      {/* Section title */}
      <Text style={styles.sectionTitle}>Popular Movies</Text>

      {/* Movie list */}
      <FlatList<Movie>
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 5,
  },

  searchInput: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
  },

  poster: {
    width: 100,
    height: 145,
    borderRadius: 10,
  },

  movieInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingVertical: 3,
  },

  movieTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
  },

  movieDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },

  rating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
    marginTop: 8,
  },

  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#222',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});