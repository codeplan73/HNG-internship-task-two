"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";
import { CartItem } from "@/types";

type CartType = {
  items: CartItem[];
  total: number;
  totalItem: number;
  totalPrice: number;
  coupon: number;
  discount: number;
  addItem: (item: CartItem) => void;
  increaseItemQuantity: (itemId: string) => void;
  decreaseItemQuantity: (itemId: string) => void;
  reduceFromCart: (itemId: string) => void;
  removeItem: (itemId: string) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  reduceFromCart: () => {},
  removeItem: () => {},
  total: 0,
  coupon: 0,
  discount: 0,
  totalPrice: 0,
  totalItem: 0,
});

const CartProvider = ({ children }: PropsWithChildren<any>) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
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

  const increaseItemQuantity = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseItemQuantity = (itemId: string) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const reduceFromCart = (itemId: string) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const totalItem = items.reduce((acc, item) => acc + item.quantity, 0);

  const coupon = 0;

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = totalPrice * 0.05;

  const total = totalPrice - discount;

  return (
    <CartContext.Provider
      value={{
        items,
        totalItem,
        coupon,
        discount,
        totalPrice,
        addItem,
        increaseItemQuantity,
        decreaseItemQuantity,
        reduceFromCart,
        removeItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
