import { Link, useLocation } from "react-router-dom";
import {
  FiCheck,
  FiShoppingBag,
  FiHome
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
  const location = useLocation();

  const orderTotal =
    location.state?.total ?? 0;

  const customer =
    location.state?.customer;

  const orderNumber =
    `FURNI-${Date.now().toString().slice(-6)}`;

  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] bg-neutral-50 px-5 py-16">
        <div className="mx-auto max-w-2xl">

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
              <FiCheck size={36} />
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Order Confirmed
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Thank You for Your Order!
            </h1>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-neutral-600">
              Your order has been successfully placed.
              We will process your order and prepare it for delivery.
            </p>

            <div className="mt-8 rounded-xl bg-neutral-50 p-5 text-left">

              <div className="flex justify-between gap-4 border-b border-neutral-200 pb-4">
                <span className="text-sm text-neutral-500">
                  Order Number
                </span>

                <span className="text-sm font-semibold">
                  {orderNumber}
                </span>
              </div>

              {customer && (
                <div className="border-b border-neutral-200 py-4">

                  <p className="text-sm text-neutral-500">
                    Delivery To
                  </p>

                  <p className="mt-1 font-medium">
                    {customer.firstName}{" "}
                    {customer.lastName}
                  </p>

                  <p className="mt-1 text-sm text-neutral-600">
                    {customer.city}, {customer.state} -{" "}
                    {customer.pincode}
                  </p>

                </div>
              )}

              <div className="flex justify-between gap-4 pt-4">

                <span className="text-sm text-neutral-500">
                  Order Total
                </span>

                <span className="font-semibold">
                  ${Number(orderTotal).toFixed(2)}
                </span>

              </div>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-black bg-white px-6 py-3 font-medium text-black transition hover:bg-black hover:text-white"
              >
                <FiShoppingBag size={18} />
                Continue Shopping
              </Link>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 px-6 py-3 font-medium transition hover:border-black"
              >
                <FiHome size={18} />
                Back to Home
              </Link>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default OrderSuccess;