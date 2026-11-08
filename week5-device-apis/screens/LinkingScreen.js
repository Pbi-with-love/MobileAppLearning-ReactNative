import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import * as Linking from 'expo-linking';

const PHONE = '+358401234567';
const EMAIL = 'example@tuni.fi';
const WEBSITE = 'https://www.tuni.fi';

export default function LinkingScreen() {
  const open = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log('Could not open URL:', url, error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Contact card" subtitle="Open other apps with Linking" />
        <Card.Content>
          <Text variant="bodyMedium">Phone: {PHONE}</Text>
          <Text variant="bodyMedium">Email: {EMAIL}</Text>
          <Text variant="bodyMedium">Website: {WEBSITE}</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button icon="phone" mode="contained" style={styles.button} onPress={() => open(`tel:${PHONE}`)}>
            Call
          </Button>
          <Button icon="message-text" mode="contained" style={styles.button} onPress={() => open(`sms:${PHONE}`)}>
            SMS
          </Button>
          <Button icon="web" mode="contained" style={styles.button} onPress={() => open(WEBSITE)}>
            Website
          </Button>
          <Button icon="email" mode="contained" style={styles.button} onPress={() => open(`mailto:${EMAIL}?subject=Hello`)}>
            Email
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { paddingBottom: 8 },
  actions: { flexWrap: 'wrap', justifyContent: 'flex-start' },
  button: { margin: 4 },
});
