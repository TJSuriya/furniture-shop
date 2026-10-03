import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    id: 1,
    name: "Living Room",
    description: "Comfortable spaces for everyday living.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Bedroom",
    description: "Create a peaceful place to relax.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Dining Room",
    description: "Beautiful furniture for shared moments.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Office",
    description: "Designed for productive workspaces.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
  }
];

function CategorySection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Explore Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Shop By Category
            </h2>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 border-b border-black pb-1 text-sm font-medium"
          >
            View All
            <FiArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40"></div>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-end justify-between gap-3">

                  <div>
                    <h3 className="text-xl font-semibold">
                      {category.name}
                    </h3>

                    <p className="mt-1 max-w-[220px] text-sm text-white/80">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
                    <FiArrowUpRight size={18} />
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;
