import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheck,
  FiLock
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [error, setError] = useState("");

  const shipping =
    cartTotal >= 500 ? 0 : 25;

  const grandTotal = cartTotal + shipping;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const hasEmptyField =
      Object.values(formData).some(
        (value) => value.trim() === ""
      );

    if (hasEmptyField) {
      setError("Please fill in all fields.");
      return;
    }

    clearCart();

    navigate("/order-success", {
      state: {
        customer: formData,
        total: grandTotal
      }
    });
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-5">
          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
              <FiCheck size={30} />
            </div>

            <h1 className="mt-6 text-3xl font-bold">
              Your Cart is Empty
            </h1>

            <p className="mt-3 text-neutral-500">
              Add some products before proceeding to checkout.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex rounded-md bg-black px-7 py-3 font-medium text-white transition hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-black"
          >
            <FiArrowLeft size={16} />
            Back to Cart
          </Link>

          <div className="mt-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Secure Checkout
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Checkout
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]"
          >

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

              <h2 className="text-xl font-semibold">
                Delivery Information
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="text-sm font-medium">
                    First Name
                  </label>

                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter first name"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Last Name
                  </label>

                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter last name"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Email
                  </label>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Phone
                  </label>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter phone number"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter your full address"
                    className="mt-2 w-full resize-none rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    City
                  </label>

                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter city"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    State
                  </label>

                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter state"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Pincode
                  </label>

                  <input
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter pincode"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

              </div>

              {error && (
                <p className="mt-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">

              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-md object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {item.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-medium">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-6 space-y-4 border-t border-neutral-200 pt-5 text-sm">

                <div className="flex justify-between">
                  <span className="text-neutral-500">
                    Subtotal
                  </span>

                  <span>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">
                    Shipping
                  </span>

                  <span>
                    {shipping === 0
                      ? "Free"
                      : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between border-t border-neutral-200 pt-4 text-base font-semibold">
                  <span>Total</span>

                  <span>
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-black px-6 py-4 font-medium text-white transition hover:bg-neutral-800"
              >
                <FiLock size={17} />
                Place Order
              </button>

              <p className="mt-4 text-center text-xs text-neutral-500">
                Your information is securely processed.
              </p>

            </div>

          </form>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Checkout;