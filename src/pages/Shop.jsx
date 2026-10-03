import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";

function Shop() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const category =
    searchParams.get("category") || "All";

  const searchText =
    searchParams.get("search") || "";

  const categories = [
    "All",
    ...new Set(
      products.map((product) => product.category)
    )
  ];

  function handleCategoryChange(selectedCategory) {
    const params = new URLSearchParams(searchParams);

    if (selectedCategory === "All") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }

    setSearchParams(params);
  }

  const filteredProducts = useMemo(() => {
    const search = searchText
      .toLowerCase()
      .trim();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        search === "" ||
        product.name
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search) ||
        product.description
          .toLowerCase()
          .includes(search);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [category, searchText]);

  function clearFilters() {
    setSearchParams({});
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Collection
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Shop Furniture
            </h1>

            <p className="mt-4 max-w-xl text-neutral-600">
              Explore our complete collection of modern
              furniture for every room in your home.
            </p>
          </div>

          {searchText && (
            <div className="mt-8 rounded-xl bg-neutral-100 px-5 py-4">
              <p className="text-sm text-neutral-500">
                Search results for
              </p>

              <p className="mt-1 text-lg font-semibold">
                "{searchText}"
              </p>
            </div>
          )}

          <div className="my-10 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  handleCategoryChange(item)
                }
                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                  category === item
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 bg-white hover:border-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              Showing{" "}
              <span className="font-medium text-black">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            {(category !== "All" || searchText) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-medium underline underline-offset-4"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-2xl">
                🔍
              </div>

              <h2 className="mt-5 text-2xl font-semibold">
                No products found
              </h2>

              <p className="mt-2 text-neutral-500">
                Try another search or category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-md bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
              >
                View All Products
              </button>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Shop;