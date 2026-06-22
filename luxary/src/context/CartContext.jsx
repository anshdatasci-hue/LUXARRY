"use client";

// import { createContext, useContext, useState } from "react";
import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  console.log("MOUNTED CART PROVIDER");
}, []);
  useEffect(() => {
  console.log("CART ITEMS:", cartItems);
}, [cartItems]);

  const addToCart = (product) => {
  console.log("ADDING", product);

  setCartItems((prev) => {
    const existingItem = prev.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}