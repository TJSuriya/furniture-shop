import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

function AboutSection() {
  const points = [
    "Modern and practical designs",
    "Furniture for every room",
    "Simple and convenient shopping"
  ];

  return (
    <section
      id="about"
      className="bg-neutral-100 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16">

        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful modern interior"
            loading="lazy"
            className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About Furni
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Furniture made for everyday living.
          </h2>

          <p className="mt-6 leading-8 text-neutral-600">
            At Furni, we believe furniture should be more than
            something beautiful. It should make your everyday
            life more comfortable and enjoyable.
          </p>

          <p className="mt-4 leading-8 text-neutral-600">
            Our collection brings together modern design,
            practical functionality, and timeless style for
            living rooms, bedrooms, dining spaces, and offices.
          </p>

          <div className="mt-7 space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <FiCheck size={15} />
                </span>

                <span className="text-sm font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-black bg-white px-7 py-4 font-medium text-black transition hover:bg-neutral-100"
          >
            Explore Our Collection
            <FiArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;