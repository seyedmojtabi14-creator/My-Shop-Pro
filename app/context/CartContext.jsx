"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      let selectedProduct = prev.find((item) => item._id == product._id);

      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        return prev.map((item) =>
          item._id == product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
    });
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item._id != id));
  }

  function updateQuantity(id, newQuantity) {
    if(newQuantity < 1) return null
    setCart((prev) => {
      return prev.map((item) => {
       return item._id == id ? { ...item, quantity: newQuantity } : item;
      });
    });
  }

  function getTotal() {
    let total = 0;
    cart.map((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  async function dollarPrice(price){
    let res = await fetch("https://nerkhara.com/api/v1/latest/usd.json");
    let req = await res.json();
    let dollar = req.item.price * 10

    console.log(req.price);
    
    let Dollarprice = price * dollar 
    return dollarPrice
  }

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, updateQuantity, getTotal, cart , dollarPrice}}
    >
      {children}
    </CartContext.Provider>
  );
}
