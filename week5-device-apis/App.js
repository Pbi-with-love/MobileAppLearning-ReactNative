import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, Button } from 'react-native-paper';

import LinkingScreen from './screens/LinkingScreen';
import SensorsScreen from './screens/SensorsScreen';
import LocationScreen from './screens/LocationScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.home}>
      <Button mode="contained" style={styles.btn} onPress={() => navigation.navigate('Linking')}>Linking</Button>
      <Button mode="contained" style={styles.btn} onPress={() => navigation.navigate('Sensors')}>Sensors</Button>
      <Button mode="contained" style={styles.btn} onPress={() => navigation.navigate('Location')}>Location</Button>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Linking" component={LinkingScreen} />
          <Stack.Screen name="Sensors" component={SensorsScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  home: { flex: 1, padding: 16, justifyContent: 'center' },
  btn: { marginVertical: 6 },
});
