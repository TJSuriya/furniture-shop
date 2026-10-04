import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiShoppingBag,
  FiTrash2
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { addToCart } = useCart();

  const {
    wishlistItems,
    removeFromWishlist
  } = useWishlist();

  function handleMoveToCart(product) {
    addToCart(product);
    removeFromWishlist(product.id);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Your Favorites
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Wishlist
              </h1>

              <p className="mt-4 text-neutral-600">
                Save your favorite furniture and come back anytime.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-black px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              <FiArrowLeft size={17} />
              Continue Shopping
            </Link>

          </div>

          {wishlistItems.length === 0 ? (
            <div className="flex min-h-[45vh] items-center justify-center">

              <div className="max-w-md text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                  <FiHeart size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Your Wishlist is Empty
                </h2>

                <p className="mt-3 leading-7 text-neutral-500">
                  You haven't added any products to your wishlist yet.
                  Explore our collection and save your favorites.
                </p>

                <Link
                  to="/shop"
                  className="mt-7 inline-flex items-center gap-2 rounded-md border border-black bg-white px-7 py-3 font-medium text-black transition hover:bg-black hover:text-white"
                >
                  <FiShoppingBag size={18} />
                  Browse Products
                </Link>

              </div>

            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="relative">

                    <ProductCard product={product} />

                    <div className="mt-3 grid grid-cols-2 gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          handleMoveToCart(product)
                        }
                        className="flex items-center justify-center gap-2 rounded-md bg-black px-3 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                      >
                        <FiShoppingBag size={16} />
                        Move to Cart
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromWishlist(product.id)
                        }
                        className="flex items-center justify-center gap-2 rounded-md border border-neutral-300 px-3 py-3 text-sm font-medium transition hover:border-black"
                      >
                        <FiTrash2 size={16} />
                        Remove
                      </button>

                    </div>

                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Wishlist;