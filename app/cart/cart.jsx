"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import formatPrice from "../utils/formatPrice";

export default function CartComponent() {
  const [cartproducts, setCartproducts] = useState([]);

  const total = cartproducts.reduce((sun , product) => sun + product.price,0);

  useEffect(() => {
    async function Getcartproduct() {
      const res = await fetch(
        "https://dummyjson.com/products/category/laptops",
      );

      const data = await res.json();

      setCartproducts(data.products);
    }
    Getcartproduct();
  }, []);

  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-4 py-10  flex-row-reverse mt-7"
    >
      <h1 className="mb-8 text-3xl font-bold text-slate-800">سبد خرید شما</h1>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {/* سبد خرید و مبلغ نهایی */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-slate-800">سبد خرید</h2>

          <div className="flex items-center justify-between border-b pb-5">
            <div>
              <p className="mt-2 text-sm text-slate-500">
                محصولات انتخاب‌شده شما
              </p>
            </div>

            <span className="text-sm text-slate-500">تعداد محصولات: {cartproducts.length}</span>
          </div>

          <div className="mt-5 divide-y divide-slate-200">
            {cartproducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between border-t  pt-4 text-lg font-bold text-slate-800">
              <span>مبلغ نهایی</span>
              <span>{formatPrice(total)} تومان</span>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
            >
              ادامه ثبت سفارش
            </button>
          </div>
        </div>

        {/* اطلاعات مشتری */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-slate-800">اطلاعات شما</h2>

          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="نام"
              className="rounded-lg border p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="نام خانوادگی"
              className="rounded-lg border p-3 outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              placeholder="شماره موبایل"
              className="rounded-lg border p-3 outline-none focus:border-blue-500 sm:col-span-2"
            />

            <input
              type="text"
              placeholder="استان"
              className="rounded-lg border p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="شهر"
              className="rounded-lg border p-3 outline-none focus:border-blue-500"
            />

            <textarea
              placeholder="آدرس کامل"
              rows={4}
              className="resize-none rounded-lg border p-3 outline-none focus:border-blue-500 sm:col-span-2"
            />

            <button
              type="button"
              className="rounded-lg bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 sm:col-span-2"
            >
              ثبت اطلاعات
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
