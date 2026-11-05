import ProductBox from "./ProductBox";

export default function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {products.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} product={product} />
        ))}
    </div>
  );
}
