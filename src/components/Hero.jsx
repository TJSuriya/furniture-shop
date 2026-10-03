import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck
} from "react-icons/fi";

function Hero() {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-16 md:py-24">

        <div>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            <span className="h-px w-8 bg-neutral-400"></span>
            Modern Furniture
          </p>

          <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Make Your Home
            <span className="block">
              Beautiful & Comfortable
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
            Discover beautifully designed furniture that brings
            comfort, style, and character to every corner of your home.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-7 py-4 font-medium text-white transition hover:bg-neutral-800"
            >
              Shop Collection
              <FiArrowRight size={18} />
            </Link>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-7 py-4 font-medium transition hover:border-black"
            >
              Explore More
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 border-t border-neutral-300 pt-7">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <FiCheck size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Quality Design
                </p>

                <p className="text-xs text-neutral-500">
                  Made for everyday living
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <FiCheck size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Easy Shopping
                </p>

                <p className="text-xs text-neutral-500">
                  Simple & secure checkout
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
              alt="Modern living room furniture"
              loading="eager"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px] lg:h-[600px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 rounded-xl bg-white p-4 shadow-lg sm:bottom-7 sm:left-7">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Featured
            </p>

            <p className="mt-1 text-sm font-semibold">
              Modern Living Collection
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;