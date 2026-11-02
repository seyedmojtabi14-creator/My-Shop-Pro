"use client";

import Link from "next/link";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isactivmobile, setIsActivMobile] = useState(false);

  const pathname = usePathname();

  console.log(pathname);

  const boxRef = useRef(null)

  function ExitTheMenu(e){
    if(boxRef.current && !boxRef.current.contains(e.target)){
      setIsActivMobile(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown',ExitTheMenu)
  } ,[])

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-slate-100 text-right">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 flex-row-reverse">
        {/* سمت چپ: لوگو و اسم فروشگاه */}
        <Link href="/" className="flex items-center gap-3 ml-5">
          <FaShoppingCart size={22} color="blue" />
          <span className="text-2xl font-bold text-slate-800">
            Shop<span className="text-blue-600">Now</span>
          </span>
        </Link>

        {/* سمت راست: لینک‌ها */}
        <div className="sm:flex items-center gap-8 hidden mr-5">
          <Link
            href="/cart"
            className={`relative inline-block font-medium transition-colors hover:text-blue-600 ${
              pathname === "/cart" ? "text-blue-500" : "text-slate-700"
            } after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${
              pathname === "/cart"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            }`}
          >
            سبد خرید
          </Link>

          <Link
            href="/products"
            className={`relative inline-block font-medium transition-colors hover:text-blue-600 ${
              pathname === "/products" ? "text-blue-500" : "text-slate-700"
            } after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${
              pathname === "/products"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            }`}
          >
            فروشگاه
          </Link>

          <Link
            href="/"
            className={`relative inline-block font-medium transition-colors hover:text-blue-600 ${
              pathname === "/" ? "text-blue-500" : "text-slate-700"
            } after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${
              pathname === "/"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            }`}
          >
            صفحه اصلی
          </Link>
        </div>

        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsActivMobile(!isactivmobile)}
        >
          {isactivmobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isactivmobile && (
        <aside
          dir="rtl"
          ref={boxRef}
          className={`fixed right-0 top-0 z-50 h-dvh w-72 max-w-[85vw] bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out ${
            isactivmobile ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="flex items-center gap-3">
              <FaShoppingCart size={22} color="blue" />
              <span className="text-2xl font-bold text-slate-800">
                Shop<span className="text-blue-600">Now</span>
              </span>
            </span>

            <button
              onClick={() => setIsActivMobile(!isactivmobile)}
              className="text-xl text-slate-600"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-lg p-4  ${pathname === "/" ? "text-blue-500 bg-slate-200" : "bg-white  text-slate-700 hover:bg-slate-100"}`}
            >
              <FaHome />
              صفحه اصلی
            </Link>

            <Link
              href="/products"
              className={`flex items-center gap-3 rounded-lg p-4 ${pathname === "/products" ? "text-blue-500 bg-slate-200" : "bg-white  text-slate-700 hover:bg-slate-100"}`}
            >
              <FaStore />
              فروشگاه
            </Link>

            <Link
              href="/cart"
              className={`flex items-center gap-3 rounded-lg p-4 ${pathname === "/cart" ? "text-blue-500 bg-slate-200" : "bg-white  text-slate-700 hover:bg-slate-100"}`}
            >
              <FaShoppingCart />
              سبد خرید
            </Link>
          </nav>
        </aside>
      )}
    </header>
  );
}
