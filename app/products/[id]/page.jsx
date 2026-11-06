import Link from "next/link";
import formatPrice from "../../utils/formatPrice";
import { connectedToDatabase } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import { notFound } from "next/navigation";


export default async function ProductDetails({ params }) {
  const { id } = await params;

  await connectedToDatabase();
  // const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await Product.findById(id).lean();

  if(!product){
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16 mt-10">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
          {/* سمت راست: عکس محصول */}
          <div className="flex min-h-80 items-center justify-center rounded-2xl bg-gray-50 p-6 lg:min-h-[460px]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[400px] w-full object-contain"
            />
          </div>

          {/* سمت چپ: اطلاعات محصول */}
          <div className="text-right">
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="inline-block rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
              {product.category}
            </Link>

            <h1 className="mt-5 text-2xl font-bold leading-10 text-gray-900 sm:text-3xl">
              {product.title}
            </h1>

            <div className="text-right mt-4 flex items-center justify-end gap-2 text-sm text-gray-500">
              <span>{product.rating ?? "بدون امتیاز"}</span>
              <span className="text-amber-400">★</span>
              <span>امتیاز محصول</span>
            </div>
           

            <p className="mt-6 text-sm leading-8 text-gray-500 sm:text-base">
              {product.description}
            </p>

            <div className="mt-6 space-y-3 border-y border-gray-100 py-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-800">
                  {product.brand || "نامشخص"}
                </span>
                <span className="text-sm text-gray-500">برند</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-800">
                  {product.stock > 0 ? `${product.stock} عدد` : "ناموجود"}
                </span>
                <span className="text-sm text-gray-500">موجودی انبار</span>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm text-gray-500">قیمت محصول</p>

              <div className="mt-2 flex items-center justify-end gap-2">
                <span className="text-2xl font-bold text-blue-600 sm:text-3xl">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm font-semibold text-gray-500">
                  تومان
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap  gap-3">
              <Link
                href="/products"
                className="flex-1 sm:flex-none md:flex-1 rounded-xl border border-gray-200 px-5 py-3.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                بازگشت به محصولات
              </Link>

              <Link
                href="/cart"
                className="flex-1 sm:flex-none md:flex-1 rounded-xl bg-blue-600 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                افزودن به سبد خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
