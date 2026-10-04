import { StyleSheet, View } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ navigation, route }: Props) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />

        <Appbar.Content title="Post Details" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={styles.title}>
            {post.title}
          </Text>

          <Text variant="bodyLarge" style={styles.body}>
            {post.body}
          </Text>

          <Text variant="bodyMedium" style={styles.id}>
            Post ID: {post.id}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    margin: 16,
  },

  title: {
    marginBottom: 20,
    fontWeight: 'bold',
  },

  body: {
    lineHeight: 26,
  },

  id: {
    marginTop: 20,
  },
});
