"use client";

import Image from "next/image";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function CartItem({ product }) {
  let { removeFromCart, updateQuantity } = useContext(CartContext);
  return (
    <div
      dir="rtl"
      className="flex w-full items-center gap-3 border-b border-slate-200 py-4 sm:gap-5"
    >
      {/* عکس محصول */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-24">
        <Link href={`/products/${product._id}`}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 80px, 96px"
            className="object-contain p-2"
          />
        </Link>
      </div>

      {/* اطلاعات محصول */}
      <div className="min-w-0 flex-1">
        <Link href={`/products/${product._id}`}>
          <h3 className="line-clamp-2 text-sm font-bold leading-6 text-slate-800 sm:text-base">
            {product.title}
          </h3>
        </Link>

        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
          تعداد:{" "}
          <input
            className="w-7 rounded "
            type="number"
            value={product.quantity}
            onChange={(e) =>
              updateQuantity(product._id, Number(e.target.value))
            }
          />
        </p>

        <p className="mt-2 text-sm font-bold text-blue-600 sm:text-base">
          {(product.price * (product.quantity ?? 1)).toLocaleString("fa-IR")}{" "}
          تومان
        </p>
      </div>

      {/* دکمه حذف */}
      <button
        onClick={() => removeFromCart(product._id)}
        type="button"
        className="shrink-0 rounded-lg px-2 py-2 text-xs text-red-500 transition hover:bg-red-50 hover:text-red-700 sm:px-3 sm:text-sm"
      >
        <FaTrash />
      </button>
    </div>
  );
}
