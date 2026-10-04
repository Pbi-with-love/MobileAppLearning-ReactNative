import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlatformInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖 Android Version</Text>
      <Text>This component is running on Android.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#e8f5e9',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});