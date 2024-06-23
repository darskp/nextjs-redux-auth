
import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();
  return (
    <div>
    <div className="mx-auto py-3 text-center">
      <h1 className="font-bold text-2xl">Shopping Cart</h1>
    </div>
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
      {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
        ? getAllProducts.data.map((productItem) => (
            <ProductCard item={productItem} />
          ))
        : null}
    </div>
  </div>
  );
}
