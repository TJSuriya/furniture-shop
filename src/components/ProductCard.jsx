import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingBag
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist
  } = useWishlist();

  const liked = isInWishlist(product.id);

  return (
    <article className="group">

      <div className="relative overflow-hidden rounded-xl bg-neutral-100">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            liked
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-4 top-4 rounded-full p-3 shadow transition ${
            liked
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          }`}
        >
          <FiHeart
            size={18}
            fill={
              liked
                ? "currentColor"
                : "none"
            }
          />
        </button>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-md bg-black py-3 text-sm font-medium text-white opacity-100 transition hover:bg-neutral-800 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <FiShoppingBag size={18} />
          Add to Cart
        </button>

      </div>

      <Link
        to={`/product/${product.id}`}
        className="mt-4 block"
      >
        <h3 className="text-lg font-medium transition group-hover:underline">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          {product.category}
        </p>

        <p className="mt-2 font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </Link>

    </article>
  );
}

export default ProductCard;