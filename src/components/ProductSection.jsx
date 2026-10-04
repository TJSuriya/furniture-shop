import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductSection() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-lg text-neutral-600">
              Discover some of our most popular furniture pieces
              for every room in your home.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-black bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-100"
          >
            View All Products
            <FiArrowRight size={17} />
          </Link>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductSection;