import { fetchProductById } from "@/actions"

const Product = async ({ params }) => {
    const productData = await fetchProductById(params?.id);
    console.log("by id",productData)
    return (
        <div>{params?.id}</div>
    )
}

export default Product
