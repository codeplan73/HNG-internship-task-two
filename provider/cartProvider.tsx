"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";
import { CartItem } from "@/types";

type CartType = {
  items: CartItem[];
  total: number;
  addItem: () => void;
  // checkout: () => void
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = () => {};

  const total = 0;

  return (
    <CartContext.Provider value={{ items, addItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
