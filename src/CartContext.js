import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("shm_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("shm_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // ADD TO CART
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p.slug === product.slug);
      if (found) {
        return prev.map((p) =>
          p.slug === product.slug ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  // UPDATE QTY  ✅ (ADDED)
  const updateQty = (slug, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((p) =>
        p.slug === slug ? { ...p, qty } : p
      )
    );
  };

  // REMOVE ITEM
  const removeFromCart = (slug) => {
    setCart((prev) => prev.filter((p) => p.slug !== slug));
  };

  // CLEAR CART
  const clearCart = () => setCart([]);

  // TOTAL ITEMS  ✅ (ADDED)
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // TOTAL PRICE  ✅ (ADDED)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,      // exposed
        removeFromCart,
        clearCart,
        totalItems,     // exposed
        totalPrice,     // exposed
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export default CartContext;
