"use client"
import Link from "next/link";
import formatPrice from "../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductBox({ product }) {

  let {addToCart,dollarPrice} = useContext(CartContext)

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition duration-300 hover:shadow-lg sm:p-4">
      <Link href={`/products/${product._id}`}>
        <div className="flex h-48 items-center justify-center rounded-xl bg-gray-50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-fit w-full object-contain p-3"
          />
        </div>
      </Link>

      <Link href={`/products/${product._id}`}>
        <h2 className="mt-4 line-clamp-1 text-base font-semibold text-gray-800">
          {product.title}
        </h2>
      </Link>

      <div className="mt-4 flex items-center justify-between gap-3 flex-row-reverse">
        <p className="text- font-bold text-blue-600">
          {formatPrice(product.price)}
          <span className="-rotate-6 inline-block rounded-md  px-1.5 py-0.5 text-xs font-bold italic text-blue-700">
            تومان
          </span>
        </p>

        <button onClick={() => addToCart(product)} className="rounded-xl bg-blue-600 px-2 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}
