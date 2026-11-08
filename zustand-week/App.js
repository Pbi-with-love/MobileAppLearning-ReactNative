import { ScrollView, StyleSheet, Text } from 'react-native';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Shop</Text>
      <ProductList />
      <Cart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, paddingTop: 60 },
  heading: { fontSize: 30, fontWeight: 'bold', marginBottom: 24 },
});
