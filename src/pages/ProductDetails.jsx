import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiHeart
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist
  } = useWishlist();

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-5">
          <div className="text-center">

            <h1 className="text-3xl font-bold">
              Product Not Found
            </h1>

            <p className="mt-3 text-neutral-500">
              Sorry, this product does not exist.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-md bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
            >
              Back to Shop
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  const liked = isInWishlist(product.id);

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function decreaseQuantity() {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  }

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">

        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-black"
          >
            ← Back to Shop
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">

            <div className="overflow-hidden rounded-2xl bg-neutral-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>

            <div className="flex flex-col justify-center">

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                {product.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </p>

              <p className="mt-6 max-w-xl leading-8 text-neutral-600">
                {product.description}
              </p>

              <button
                type="button"
                onClick={() =>
                  toggleWishlist(product)
                }
                className={`mt-7 flex w-fit items-center gap-2 rounded-md border px-5 py-3 transition ${
                  liked
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 hover:border-black"
                }`}
              >
                <FiHeart
                  size={18}
                  fill={
                    liked
                      ? "currentColor"
                      : "none"
                  }
                />

                {liked
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>

              <div className="mt-7">

                <p className="mb-3 text-sm font-medium">
                  Quantity
                </p>

                <div className="flex w-fit items-center rounded-md border border-neutral-300">

                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="p-3 transition hover:bg-neutral-100"
                    aria-label="Decrease quantity"
                  >
                    <FiMinus />
                  </button>

                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="p-3 transition hover:bg-neutral-100"
                    aria-label="Increase quantity"
                  >
                    <FiPlus />
                  </button>

                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-6 flex max-w-md items-center justify-center gap-2 rounded-md bg-black px-8 py-4 font-medium text-white transition hover:bg-neutral-800"
              >
                <FiShoppingBag size={19} />
                Add {quantity} to Cart
              </button>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;