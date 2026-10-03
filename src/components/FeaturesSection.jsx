import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones
} from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: FiTruck,
    title: "Free Delivery",
    description:
      "Enjoy free delivery on furniture orders above $500."
  },
  {
    id: 2,
    icon: FiShield,
    title: "Secure Shopping",
    description:
      "Your shopping experience is protected and secure."
  },
  {
    id: 3,
    icon: FiRefreshCw,
    title: "Easy Returns",
    description:
      "Simple return process for eligible products."
  },
  {
    id: 4,
    icon: FiHeadphones,
    title: "Customer Support",
    description:
      "Our support team is here to help when you need us."
  }
];

function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Why Furni
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Designed Around You
          </h2>

          <p className="mt-4 leading-7 text-neutral-600">
            We make furniture shopping simple, comfortable,
            and convenient from browsing to delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-neutral-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;