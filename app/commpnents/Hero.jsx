import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-20">
      <div className="grid min-h-[280px] items-center overflow-hidden rounded-3xl bg-[url('/images/hero-bg-mobile-2.png')] md:bg-[url('/images/hero-bg.png')] bg-cover bg-center p-6 sm:min-h-[350px] sm:p-10 md:grid-cols-2 lg:min-h-[400px] lg:p-14">

        {/* Content */}
        <div className="mb-10 order-2 text-center md:text-right">
          <h1 className="mb-2 text-2xl font-bold leading-relaxed text-gray-900 sm:text-4xl lg:text-3xl">
            یک تجربه خرید
            <span className="text-blue-600"> متفاوت</span>
          </h1>

          <p className="mx-auto mb-3 max-w-lg text-sm leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            از محصولات روزمره تا انتخاب‌های خاص؛ محصولات مورد علاقه‌ات را با چند
            کلیک پیدا کن و یک خرید آسان و لذت‌بخش داشته باش.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
          >
            مشاهده محصولات
          </Link>
        </div>

      </div>
    </section>
  );
}