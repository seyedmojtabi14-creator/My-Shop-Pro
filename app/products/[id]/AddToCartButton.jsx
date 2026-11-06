"use client"
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

export default function AddTodoButton({ product }) {
     const { addToCart } = useContext(CartContext);
  return (
    <Link
      onClick={()=> addToCart(product)}
      href="/cart"
      className="flex-1 sm:flex-none md:flex-1 rounded-xl bg-blue-600 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
    >
      افزودن به سبد خرید
    </Link>
  );
}
