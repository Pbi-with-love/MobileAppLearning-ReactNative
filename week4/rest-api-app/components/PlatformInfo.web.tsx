import { StyleSheet, Text, View } from 'react-native';

export default function PlatformInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌐 Web Version</Text>
      <Text>This component is running on the web.</Text>
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