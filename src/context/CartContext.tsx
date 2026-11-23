import React, { createContext, useContext, useState } from 'react';
import { Product } from '../components/components';
import { CartItem } from '../types/CartItem';

interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.product.id === product.id);

      if (itemExists) {
        // Se já existe, apenas incrementa a quantidade
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // Se não existe, adiciona com quantidade 1
      return [...prevCart, { product, quantity: 1 }];
    });
  }

  function removeFromCart(productId: number) {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
