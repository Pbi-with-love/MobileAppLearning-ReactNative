import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Part 1: set to false to test the basic version (cart is lost after restart)
// Part 3: set to true to persist the cart with AsyncStorage
const USE_PERSIST = true;

const cartStore = (set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  // Extension: remove one product with this id from the cart
  removeFromCart: (id) =>
    set((state) => {
      const index = state.cart.findIndex((product) => product.id === id);
      if (index === -1) return state;
      return { cart: state.cart.filter((_, i) => i !== index) };
    }),

  clearCart: () => set({ cart: [] }),
});

export const useCartStore = USE_PERSIST
  ? create(
      persist(cartStore, {
        name: 'cart-storage',
        storage: createJSONStorage(() => AsyncStorage),
        partialize: (state) => ({ cart: state.cart }),
      })
    )
  : create(cartStore);
