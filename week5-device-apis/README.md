# Week 5 – Mobile Device Features and Permissions

Expo app with three screens:

- **LinkingScreen** – opens the dialer (`tel:`), messages (`sms:`), browser (`https:`) and email (`mailto:`) with `expo-linking`.
- **SensorsScreen** – shows accelerometer X / Y / Z with `expo-sensors`. The subscription is removed in the `useEffect` cleanup.
- **LocationScreen** – requests foreground location permission only when the button is pressed, handles granted / denied, shows `status`, `granted`, `canAskAgain`, latitude and longitude.
- **Extension (Part 7)** – "Open in Maps" button opens the retrieved location in Google Maps.

## Run

```bash
npm install
npx expo start
```

Scan the QR code with **Expo Go** on a physical phone (same Wi-Fi as the computer).
If the phone cannot connect, use `npx expo start --tunnel`.

## Sources

- https://docs.expo.dev/versions/latest/sdk/linking/
- https://docs.expo.dev/versions/latest/sdk/accelerometer/
- https://docs.expo.dev/versions/latest/sdk/location/
