import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import * as Location from 'expo-location';
import * as Linking from 'expo-linking';

export default function LocationScreen() {
  const [message, setMessage] = useState('Location not requested yet.');
  const [permission, setPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    try {
      setLoading(true);

      // Request permission only when the user presses the button
      const result = await Location.requestForegroundPermissionsAsync();
      setPermission(result);

      if (!result.granted) {
        setLocation(null);
        setMessage('Location permission denied.');
        return;
      }

      setMessage('Getting location...');
      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation(position.coords);
      setMessage('Location received.');
    } catch (error) {
      console.log(error);
      setMessage('Could not get location.');
    } finally {
      setLoading(false);
    }
  };

  // Extension (Part 7): open the location in a map
  const openInMaps = () => {
    const { latitude, longitude } = location;
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Title title="My location" subtitle="Expo Location" />
        <Card.Content>
          <Text variant="titleMedium" style={styles.message}>{message}</Text>

          {permission && (
            <>
              <Text>status: {permission.status}</Text>
              <Text>granted: {String(permission.granted)}</Text>
              <Text>canAskAgain: {String(permission.canAskAgain)}</Text>
            </>
          )}

          {location && (
            <>
              <Text style={styles.coords}>Latitude: {location.latitude.toFixed(6)}</Text>
              <Text>Longitude: {location.longitude.toFixed(6)}</Text>
            </>
          )}
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button icon="crosshairs-gps" mode="contained" onPress={getLocation} loading={loading} disabled={loading}>
            Use my location
          </Button>
          {location && (
            <Button icon="map" mode="outlined" onPress={openInMaps}>
              Open in Maps
            </Button>
          )}
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  message: { marginBottom: 8 },
  coords: { marginTop: 8 },
  actions: { flexWrap: 'wrap' },
});
