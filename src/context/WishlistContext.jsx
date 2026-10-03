import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist =
        localStorage.getItem("furni-wishlist");

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "furni-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  function toggleWishlist(product) {
    setWishlistItems((items) => {
      const exists = items.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return items.filter(
          (item) => item.id !== product.id
        );
      }

      return [
        ...items,
        product
      ];
    });
  }

  function isInWishlist(id) {
    return wishlistItems.some(
      (item) => item.id === id
    );
  }

  function removeFromWishlist(id) {
    setWishlistItems((items) =>
      items.filter(
        (item) => item.id !== id
      )
    );
  }

  function clearWishlist() {
    setWishlistItems([]);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}