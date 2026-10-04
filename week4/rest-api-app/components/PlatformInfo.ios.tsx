import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlatformInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍎 iOS Version</Text>
      <Text>This component is running on iOS.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#f0f0f5',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});