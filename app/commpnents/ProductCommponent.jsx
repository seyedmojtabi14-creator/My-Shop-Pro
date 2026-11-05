import { connectedToDatabase } from "../lib/mongodb";
import ProductsList from "./ProductsList ";
import Product from "@/app/models/Product";

export default async function ProductCommponent({ searchParams }) {
  const category = searchParams?.category;

  await connectedToDatabase();

  const products = await Product.find(category ? { category } : {}).lean();

  const safeProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
  // await connectedToDatabase();

  // const products = await Product.find({}).lean();

  // const safeProducts = JSON.parse(JSON.stringify(products));

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 mt-10">
      <div className="mb-8 text-center md:text-right mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          محصولات پرفروش
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
          محصولات محبوب و منتخب فروشگاه ما را بررسی کنید
        </p>

        <div className="mt-5 h-1 w-16 mx-auto md:mx-0 md:mr-auto rounded-full bg-blue-600" />
      </div>

      <ProductsList products={safeProducts} />
    </section>
  );
}
