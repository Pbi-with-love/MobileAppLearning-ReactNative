import { StyleSheet, Text, View } from 'react-native';

export default function PlatformInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Platform Version</Text>
      <Text>This component is running on an unsupported platform.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
