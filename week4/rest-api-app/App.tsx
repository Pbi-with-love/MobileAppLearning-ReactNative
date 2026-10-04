import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsScreen from './screens/PostsScreen';
import DetailsScreen from './screens/DetailsScreen';

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type RootStackParamList = {
  Posts: undefined;
  Details: {
    post: Post;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: 'Posts',
          }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Post Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
