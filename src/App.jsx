import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import {
  WishlistProvider
} from "./context/WishlistContext";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <CartProvider>

        <WishlistProvider>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/shop"
              element={<Shop />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </WishlistProvider>

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;