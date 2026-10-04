import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
  FiHeart
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();

  const navigate = useNavigate();

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSearch(event) {
    event.preventDefault();

    const search = searchText.trim();

    if (!search) {
      return;
    }

    navigate(
      `/shop?search=${encodeURIComponent(search)}`
    );

    setSearchText("");
    setSearchOpen(false);
    closeMenu();
  }

  function toggleSearch() {
    setSearchOpen((open) => !open);
    setMenuOpen(false);
  }

  function handleHomeSection(sectionId) {
    closeMenu();

    navigate("/");

    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }, 100);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          Furni
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-neutral-600 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-sm font-medium text-neutral-600 transition hover:text-black"
          >
            Shop
          </Link>

          <button
            type="button"
            onClick={() => handleHomeSection("about")}
            className="text-sm font-medium text-neutral-600 transition hover:text-black"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleHomeSection("contact")}
            className="text-sm font-medium text-neutral-600 transition hover:text-black"
          >
            Contact
          </button>

        </div>

        <div className="flex items-center gap-1 sm:gap-2">

          <button
            type="button"
            onClick={toggleSearch}
            className="rounded-full p-2.5 transition hover:bg-neutral-100"
            aria-label="Search"
          >
            {searchOpen ? (
              <FiX size={20} />
            ) : (
              <FiSearch size={20} />
            )}
          </button>

          <button
            type="button"
            onClick={() =>
              alert("Account feature coming soon!")
            }
            className="hidden rounded-full p-2.5 transition hover:bg-neutral-100 sm:block"
            aria-label="Account"
          >
            <FiUser size={20} />
          </button>

          <Link
            to="/wishlist"
            className="relative rounded-full p-2.5 transition hover:bg-neutral-100"
            aria-label="Wishlist"
          >
            <FiHeart size={20} />

            {wishlistItems.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-medium text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative rounded-full p-2.5 transition hover:bg-neutral-100"
            aria-label="Shopping Cart"
          >
            <FiShoppingBag size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open);
              setSearchOpen(false);
            }}
            className="rounded-full p-2.5 transition hover:bg-neutral-100 md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>

        </div>

      </nav>

      {searchOpen && (
        <div className="border-t border-neutral-200 bg-white px-5 py-4">

          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-3xl gap-2"
          >

            <input
              autoFocus
              type="text"
              value={searchText}
              onChange={(event) =>
                setSearchText(event.target.value)
              }
              placeholder="Search furniture..."
              className="min-w-0 flex-1 rounded-md border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-black"
            />

            <button
              type="submit"
              className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Search
            </button>

          </form>

        </div>
      )}

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-5 py-6 md:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="font-medium"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={closeMenu}
              className="font-medium"
            >
              Shop
            </Link>

            <Link
              to="/wishlist"
              onClick={closeMenu}
              className="font-medium"
            >
              Wishlist
              {wishlistItems.length > 0 &&
                ` (${wishlistItems.length})`}
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="font-medium"
            >
              Cart
              {cartCount > 0 &&
                ` (${cartCount})`}
            </Link>

            <button
              type="button"
              onClick={() => handleHomeSection("about")}
              className="text-left font-medium"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => handleHomeSection("contact")}
              className="text-left font-medium"
            >
              Contact
            </button>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;