import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MoviesScreen from "./screens/MoviesScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

import type { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
        />

        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}