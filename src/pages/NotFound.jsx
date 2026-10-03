import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHome
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-5 py-20">

        <div className="text-center">

          <p className="text-7xl font-bold tracking-tight sm:text-9xl">
            404
          </p>

          <h1 className="mt-5 text-2xl font-bold sm:text-3xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-neutral-500">
            The page you are looking for does not exist
            or may have been moved.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-neutral-800"
            >
              <FiHome size={18} />
              Back to Home
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 px-6 py-3 font-medium transition hover:border-black"
            >
              <FiArrowLeft size={18} />
              Browse Shop
            </Link>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default NotFound;