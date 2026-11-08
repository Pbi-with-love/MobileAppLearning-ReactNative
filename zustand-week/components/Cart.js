import { View, Text, Button, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart ({cart.length})</Text>

      {cart.length === 0 && <Text>Your cart is empty.</Text>}

      {cart.map((product, index) => (
        <View key={`${product.id}-${index}`} style={styles.item}>
          <Text>
            {product.name} - €{product.price.toFixed(2)}
          </Text>
          <Button title="Remove" onPress={() => removeFromCart(product.id)} />
        </View>
      ))}

      <Text style={styles.total}>Total: €{total.toFixed(2)}</Text>
      <Button title="Clear cart" onPress={clearCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 28, paddingTop: 18, borderTopWidth: 1 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  total: { marginTop: 12, fontSize: 18, fontWeight: 'bold' },
});
