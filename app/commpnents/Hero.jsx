import Link from "next/link";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 py-4 sm:mt-8 sm:px-6 sm:py-10 lg:py-16">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-gray-50 p-6 sm:p-10 md:grid-cols-2 lg:p-14">
        {/* Image - Left */}
        <div className="order-1 flex justify-center">
          <Link href="/" className="flex items-center gap-3 sm:gap-3">
          <FaShoppingCart size={22} color="blue" />
          <span className="text-2xl font-bold text-slate-800">
            Shop<span className="text-blue-600">Now</span>
          </span>
        </Link>
        </div>

        {/* Content - Right */}
        <div className="order-2 text-center md:text-right">
          

          <h1 className="mb-4 text-2xl font-bold leading-relaxed text-gray-900 sm:mb-5 sm:text-4xl lg:text-3xl">
        یک تجربه خرید
        <span className="text-blue-600"> متفاوت</span>
      </h1>

          <p className="mb-8 max-w-lg text-base leading-8 text-gray-500 sm:text-lg">
            از محصولات روزمره تا انتخاب‌های خاص؛ محصولات مورد علاقه‌ات را با چند
            کلیک پیدا کن و یک خرید آسان و لذت‌بخش داشته باش
          </p>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>
    </section>
  );
}
