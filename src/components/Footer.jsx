import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiTwitter
} from "react-icons/fi";

function Footer() {
  const shopLinks = [
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Office"
  ];

  return (
    <footer
      id="contact"
      className="bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight"
            >
              Furni
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              Beautiful furniture designed to make your
              home comfortable, stylish, and welcoming.
            </p>

            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  alert("Instagram link coming soon!")
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:bg-white hover:text-black"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </button>

              <button
                type="button"
                onClick={() =>
                  alert("Facebook link coming soon!")
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:bg-white hover:text-black"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </button>

              <button
                type="button"
                onClick={() =>
                  alert("Twitter link coming soon!")
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:bg-white hover:text-black"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </button>

            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Shop
            </h3>

            <div className="mt-5 space-y-3">

              {shopLinks.map((category) => (
                <Link
                  key={category}
                  to={`/shop?category=${encodeURIComponent(category)}`}
                  className="block text-sm text-neutral-400 transition hover:text-white"
                >
                  {category}
                </Link>
              ))}

            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-5 space-y-3">

              <a
                href="/#about"
                className="block text-sm text-neutral-400 transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="/#contact"
                className="block text-sm text-neutral-400 transition hover:text-white"
              >
                Contact
              </a>

              <button
                type="button"
                onClick={() =>
                  alert("Privacy Policy coming soon!")
                }
                className="block text-sm text-neutral-400 transition hover:text-white"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                onClick={() =>
                  alert("Terms & Conditions coming soon!")
                }
                className="block text-sm text-neutral-400 transition hover:text-white"
              >
                Terms & Conditions
              </button>

            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-3 text-sm text-neutral-400">

              <p>Chennai, Tamil Nadu</p>

              <a
                href="tel:+919876543210"
                className="block transition hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@furni.com"
                className="block transition hover:text-white"
              >
                hello@furni.com
              </a>

            </div>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4"
            >
              Start Shopping
              <FiArrowUpRight size={16} />
            </Link>

          </div>

        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-800 pt-7 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Furni. All rights reserved.
          </p>

          <p>
            Modern furniture for modern living.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;