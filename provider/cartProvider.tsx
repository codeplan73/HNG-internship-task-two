"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";
import { CartItem } from "@/types";

type CartType = {
  items: CartItem[];
  total: number;
  totalItem: number;
  addItem: (item: CartItem) => void;
  reduceFromCart: (itemId: string) => void;
  removeItem: (itemId: string) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  reduceFromCart: () => {},
  removeItem: () => {},
  total: 0,
  totalItem: 0,
});

const CartProvider = ({ children }: PropsWithChildren<any>) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id && item.color === newItem.color
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const reduceFromCart = (itemId: string) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === parseInt(itemId)) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== parseInt(itemId))
    );
  };

  const totalItem = items.reduce((acc, item) => acc + item.quantity, 0);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, totalItem, addItem, reduceFromCart, removeItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);