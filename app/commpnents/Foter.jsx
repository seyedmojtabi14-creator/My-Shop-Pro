
"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-5 px-6 py-8 sm:grid-cols-3 text-right">

    


  <div>
    <h3 className="mb-4 text-lg font-bold text-slate-800">
     برنامه نویس
    </h3>
    <ul className="space-y-2 text-slate-600">
      <li><Link href="/">سید مجتبی موسوی</Link></li>
      <li><Link href="/products">سن : 17</Link></li>
      <li><Link href="/about">حونیور</Link></li>
    </ul>
  </div>


  <div>
    <h3 className="mb-4 text-lg font-bold text-slate-800">
      مهارت ها
    </h3>
    <ul className="space-y-2 text-slate-600">
      <li><Link href="/">فرانت اند</Link></li>
      <li><Link href="/products">پایتون</Link></li>
    </ul>
  </div>

    <div>
    <h3 className="mb-4 text-lg font-bold text-slate-800">
      راه ارتباط
    </h3>
    <ul className="space-y-2 text-slate-600">
      <li><Link href="/">واتساب</Link></li>
      <li><Link href="/products">گیت هاب</Link></li>
      <li><Link href="/about">لینکدین</Link></li>
    </ul>
  </div>

      </div>
      {/* خط جداکننده */}
<div className="my-2 border-t border-slate-400/30"></div>

{/* بخش کپی‌رایت */}
<div dir="rtl" className="py-4 text-center text-sm text-slate-600">
  © {new Date().getFullYear()} تمامی حقوق محفوظ است.
</div>
    </footer>
  );
}
