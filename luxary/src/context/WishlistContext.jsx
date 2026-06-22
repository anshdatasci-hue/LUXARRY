"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("luxary-wishlist");

    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "luxary-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (exists) return;

    setWishlistItems((prev) => [...prev, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}