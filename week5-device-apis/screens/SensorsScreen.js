import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Accelerometer } from 'expo-sensors';

export default function SensorsScreen() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscription = null;

    try {
      // Screen opens -> subscribe to sensor
      Accelerometer.setUpdateInterval(500);
      subscription = Accelerometer.addListener((values) => {
        setData(values); // receive data
      });
    } catch (e) {
      // On web expo-sensors has no listener support and addListener throws.
      // Without this the whole screen unmounts and leaves a blank page.
      console.log('Accelerometer is not available:', e.message);
      setError('Accelerometer is not available on this platform. Run the app in Expo Go on a phone.');
    }

    // Screen closes -> remove subscription
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Accelerometer" subtitle="Values update when the phone moves" />
        <Card.Content>
          <Text variant="headlineSmall">X: {data.x.toFixed(2)}</Text>
          <Text variant="headlineSmall">Y: {data.y.toFixed(2)}</Text>
          <Text variant="headlineSmall">Z: {data.z.toFixed(2)}</Text>
          {error && <Text style={styles.error}>{error}</Text>}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  error: { marginTop: 12 },
});
