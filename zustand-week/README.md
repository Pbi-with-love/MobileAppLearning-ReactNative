# Week 6 – Zustand, Persistent Storage and Publishing

Small shop app with two independent components that share one Zustand store:

- `components/ProductList.js` – calls the `addToCart` action.
- `components/Cart.js` – reads `cart` from the store, shows the total, `Remove` and `Clear cart`.
- `store/cartStore.js` – Zustand store, persisted with AsyncStorage (`persist` middleware).
- Extension: `removeFromCart(id)` removes one product from the cart.

`USE_PERSIST` at the top of `store/cartStore.js` switches between the basic version (`false`) and the persisted version (`true`).

## Run

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `w` to open the web version.

## Expo Doctor

```bash
npx expo-doctor
```

## Sources

- https://zustand.docs.pmnd.rs/
- https://zustand.docs.pmnd.rs/integrations/persisting-store-data
- https://docs.expo.dev/versions/latest/sdk/async-storage/
- https://docs.expo.dev/versions/latest/sdk/securestore/
- https://docs.expo.dev/versions/latest/sdk/sqlite/
- https://docs.expo.dev/submit/android/
