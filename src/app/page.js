"use client"

import { fetchAllProducts } from "@/actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default async function Home() {
  const allProductData = await fetchAllProducts();
  console.log(allProductData)
  const router = useRouter();

  const handleDetails = (id) => {
    router.push(`/product/${id}`)
  }
  return (
    <div>
      {allProductData.map((product, index) => (
        <div key={product?.id}>
          <h2>{product?.title}</h2>
          <Button onClick={() => handleDetails(product?.id)}>
            Details
          </Button>
        </div>
      ))}
    </div>
  );
}
