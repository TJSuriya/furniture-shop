import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  const shipping =
    cartTotal >= 500 || cartTotal === 0
      ? 0
      : 25;

  const grandTotal = cartTotal + shipping;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Your Shopping Bag
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Shopping Cart
              </h1>

              <p className="mt-4 text-neutral-600">
                Review your selected furniture before checkout.
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

          {cartItems.length === 0 ? (
            <div className="flex min-h-[50vh] items-center justify-center">

              <div className="max-w-md text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                  <FiShoppingBag size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Your Cart is Empty
                </h2>

                <p className="mt-3 leading-7 text-neutral-500">
                  You haven't added any furniture to your cart yet.
                </p>

                <Link
                  to="/shop"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-black px-7 py-3 font-medium text-white transition hover:bg-neutral-800"
                >
                  <FiShoppingBag size={18} />
                  Start Shopping
                </Link>

              </div>

            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">

              <div className="space-y-5">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white p-4 shadow-sm sm:p-5"
                  >

                    <div className="flex flex-col gap-5 sm:flex-row">

                      <Link
                        to={`/product/${item.id}`}
                        className="shrink-0 overflow-hidden rounded-xl bg-neutral-100"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-48 w-full object-cover sm:h-32 sm:w-32"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col justify-between">

                        <div className="flex items-start justify-between gap-4">

                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="text-lg font-semibold hover:underline"
                            >
                              {item.name}
                            </Link>

                            <p className="mt-1 text-sm text-neutral-500">
                              {item.category}
                            </p>

                            <p className="mt-2 font-semibold">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
                            aria-label={`Remove ${item.name}`}
                          >
                            <FiTrash2 size={19} />
                          </button>

                        </div>

                        <div className="mt-5 flex items-center justify-between">

                          <div className="flex items-center rounded-md border border-neutral-300">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="p-2.5 transition hover:bg-neutral-100"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus size={16} />
                            </button>

                            <span className="w-10 text-center text-sm font-medium">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="p-2.5 transition hover:bg-neutral-100"
                              aria-label="Increase quantity"
                            >
                              <FiPlus size={16} />
                            </button>

                          </div>

                          <p className="font-semibold">
                            $
                            {(
                              item.price *
                              item.quantity
                            ).toFixed(2)}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

              <div className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">

                <h2 className="text-xl font-semibold">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4 text-sm">

                  <div className="flex justify-between">
                    <span className="text-neutral-500">
                      Subtotal
                    </span>

                    <span className="font-medium">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-500">
                      Shipping
                    </span>

                    <span className="font-medium">
                      {shipping === 0
                        ? "Free"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">

                    <div className="flex justify-between text-base font-semibold">
                      <span>Total</span>

                      <span>
                        ${grandTotal.toFixed(2)}
                      </span>
                    </div>

                  </div>

                </div>

                {cartTotal < 500 && (
                  <p className="mt-5 rounded-lg bg-neutral-100 p-3 text-sm text-neutral-600">
                    Add $
                    {(500 - cartTotal).toFixed(2)}
                    {" "}more to get free delivery.
                  </p>
                )}

                <Link
                  to="/checkout"
                  className="mt-6 flex w-full items-center justify-center rounded-md bg-black px-6 py-4 font-medium text-white transition hover:bg-neutral-800"
                >
                  Proceed to Checkout
                </Link>

              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;